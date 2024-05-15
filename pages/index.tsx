// /pages/index.tsx
import { gql, useQuery } from "@apollo/client";
import type { HandbookShape } from '@/graphql/types';
import { Checkbox } from '@mantine/core';
import Head from 'next/head'
import { useState } from 'react'

const AllHandbooksQuery = gql`
  query handbooks (
    $showArchived: Boolean
  ) {
    handbooks (
      showArchived: $showArchived
    ) {
      id
      name
    }
  }
`;

function Home() {
  const [showArchived, setShowArchived] = useState(false);
  const { data } = useQuery(AllHandbooksQuery,{
    variables: { showArchived },
  });
  if (!data) return null;

  return (
    <div className='flex flex-col gap-2 container mx-auto py-4'>
      <Head>
        <title>Blissbook Full-Stack Product Engineer</title>
      </Head>

      <div>
        <Checkbox
          label='Show Archived'
          onChange={(event) => setShowArchived(event.currentTarget.checked)}
        />
      </div>

      <h1 className='font-bold text-xl'>Handbooks</h1>

      <div>
        {data.handbooks.map((handbook: HandbookShape) => (
          <div key={handbook.id}>
            <h2>{handbook.id}: {handbook.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
