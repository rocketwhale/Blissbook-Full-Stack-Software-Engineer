import type { PersonShape, OrderByType } from "@/graphql/types";
import { SortOrderEnum } from "../lib/enums";
import { gql, useQuery } from "@apollo/client";
import { Checkbox, Table, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import Image from "next/image";
import UPSVGICON from "../public/icons/arrow-long-up.svg";
import DOWNSVGICON from "../public/icons/arrow-long-down.svg";
import useDebounce from "../lib/debounce";

const PEOPLE_QUERY = gql`
  query people ($search: String, $showAudienceOfAPublishedDocument: Boolean, $orderBy: PersonOrderByUpdatedAtInput) {
    people (search: $search, showAudienceOfAPublishedDocument: $showAudienceOfAPublishedDocument, orderBy: $orderBy) {
      image
      fullName
      metadata {
        city
        country
        state
      }
    }
  }
`;

function PeoplePage() {
  const [search, setSearch] = useState("");
  const [debounseSearch, setDebounceSearch] = useState("");
  const [showAudienceOfAPublishedDocument, setShowAudienceOfAPublishedDocument] = useState(false);
  const [orderBy, setOrderBy] = useState<OrderByType>({});
  const { data } = useQuery(PEOPLE_QUERY, {
    variables: { showAudienceOfAPublishedDocument, search, orderBy },
  });
  const invokeDebounced = useDebounce(
    () => setSearch(debounseSearch),
    300
  );
  useEffect(invokeDebounced, [debounseSearch]);

  const peopleRows = data?.people.map((person: PersonShape) => (
    <Table.Tr
      key={person.fullName}
    >
      <Table.Td>
        <img
          src={person.image}
          width="100"
          alt={""}/>
      </Table.Td>
      <Table.Td>
        <b>{person.fullName}</b>
        <div>Country: {person.metadata.country}</div>
        { person.metadata.state && <div>State: {person.metadata.state}</div> }
        { person.metadata.city && <div>City: {person.metadata.city}</div> }
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div className="flex flex-col gap-2 container mx-auto py-4">
      <div className="flex items-center gap-2">
        <TextInput
          className="w-48"
          onChange={(event) => setDebounceSearch(event.currentTarget.value)}
          placeholder="Search people"
          value={debounseSearch}
        />

        <Checkbox
          label="Show Audience For A Published Document"
          onChange={(event) => {
            setShowAudienceOfAPublishedDocument(event.currentTarget.checked)
          }}
        />
      </div>

      <Table highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Image</Table.Th>
            <Table.Th
              onClick={(event) => { console.log('onClick', orderBy);
                let newOrder:OrderByType = {};
                if (!orderBy?.fullName) {
                  newOrder = { fullName: SortOrderEnum.asc };
                } else if (orderBy.fullName === SortOrderEnum.asc) {
                  newOrder = { fullName: SortOrderEnum.desc };
                }

                setOrderBy(newOrder); 
              }}
            >
              Full Name
              { (orderBy.fullName === SortOrderEnum.asc) && <Image src={UPSVGICON} alt = {""}/> }
              { (orderBy.fullName === SortOrderEnum.desc) && <Image src={DOWNSVGICON} alt = {""}/> }
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{peopleRows}</Table.Tbody>
      </Table>
    </div>
  );
}

export default PeoplePage;
