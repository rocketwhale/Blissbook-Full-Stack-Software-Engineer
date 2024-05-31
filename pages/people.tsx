import type { PersonShape } from "@/graphql/types";
import { gql, useQuery } from "@apollo/client";
import { Table, TextInput, Image } from "@mantine/core";
import { useDebounce } from "@uidotdev/usehooks";
import Head from "next/head";
import { useState } from "react";

const PEOPLE_QUERY = gql`
  query people ($search: String) {
    people (search: $search) {
      image
      fullName
    }
  }
`;

function PeoplePage() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 250)
  const { data } = useQuery(PEOPLE_QUERY, {
    variables: { search: debouncedSearch },
  });

  return (
    <div className="flex flex-col gap-2 container mx-auto py-4">
      <Head>
        <title>People | Blissbook Full-Stack Product Engineer</title>
      </Head>
      <div className="flex items-center gap-2">
        <TextInput
          className="w-48"
          onChange={(event) => setSearch(event.currentTarget.value)}
          placeholder="Search people"
          value={search}
        />
      </div>

      <Table
        data={{
          head: ["Image", "Full Name"],
          body: data?.people.map((person: PersonShape) => [
            <Image src={person.image} className="max-w-16" />,
            person.fullName,
          ]),
        }}
        highlightOnHover
        stickyHeader
      />
    </div>
  );
}

export default PeoplePage;
