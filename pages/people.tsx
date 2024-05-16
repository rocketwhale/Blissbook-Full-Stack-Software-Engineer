import type { PersonShape } from "@/graphql/types";
import { gql, useQuery } from "@apollo/client";
import { Table, TextInput } from "@mantine/core";
import { useState } from "react";

const PEOPLE_QUERY = gql`
  query people ($search: String) {
    people (search: $search) {
      id
      fullName
    }
  }
`;

function PeoplePage() {
  const [search, setSearch] = useState("");
  const { data } = useQuery(PEOPLE_QUERY, {
    variables: { search },
  });

  return (
    <div className="flex flex-col gap-2 container mx-auto py-4">
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
          head: ["ID", "Full Name"],
          body: data?.people.map((person: PersonShape) => [
            person.id,
            person.fullName,
          ]),
        }}
        highlightOnHover
      />
    </div>
  );
}

export default PeoplePage;
