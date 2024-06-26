import type { DocumentShape } from "@/graphql/types";
// /pages/index.tsx
import { gql, useQuery } from "@apollo/client";
import { Checkbox, Table, TextInput } from "@mantine/core";
import { useState } from "react";

const DOCUMENTS_QUERY = gql`
  query documents ($search: String) {
    documents (search: $search) {
      id
      name
    }
  }
`;

function DocumentsPage() {
  const [search, setSearch] = useState("");
  const [showArchived, setShowArchived] = useState(false);
  const { data } = useQuery(DOCUMENTS_QUERY, {
    variables: { search, showArchived },
  });

  return (
    <div className="flex flex-col gap-2 container mx-auto py-4">
      <div className="flex items-center gap-2">
        <TextInput
          className="w-48"
          onChange={(event) => setSearch(event.currentTarget.value)}
          placeholder="Search documents"
          value={search}
        />

        <Checkbox
          label="Show Archived"
          onChange={(event) => setShowArchived(event.currentTarget.checked)}
        />
      </div>

      <Table
        data={{
          head: ["ID", "Name"],
          body: data?.documents.map((document: DocumentShape) => [
            document.id,
            document.name,
          ]),
        }}
        highlightOnHover
      />
    </div>
  );
}

export default DocumentsPage;
