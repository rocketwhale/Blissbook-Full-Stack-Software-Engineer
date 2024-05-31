# Blissbook Full-Stack Software Engineer Challenge

## Getting started

Run the following commands
```
  nvm install
  npm i
  npm run dev
```

Open your browser to http://localhost:3000/

To run the automated testing suite, run `npm run test`

## Resources

- Apollo GraphQL (client): https://www.apollographql.com/docs/react/
- GraphQL Explorer: http://localhost:3000/api/graphql
- Mantime: https://mantine.dev/
- NextJS: https://nextjs.org/
- Pothos GraphQL (server): https://pothos-graphql.dev/
- Tailwind CSS: https://tailwindcss.com/

## The Challenge

Complete as many of these tasks as you can within 1-2 hours. It is okay if you don't complete them all! A couple of notes:

  - Some of the tasks are more important than others, so I've given each task a priority: low, medium, high.
  - You can import any libraries you want, but you must use React, GraphQL, TypeScript and TailwindCSS.

### Problem Solving

  - Search isn't working properly. "ha" doesn't return any results on the documents page. The people page is similarly broken. *High Priority*
  - The "Show Archived" checkbox isn't working on the documents page. *High Priority*
  - The favicon isn't showing. *Low Priority*

### Database

  - Describe a MySQL-compatible schema for data in the `/data` folder. *High Priority*
  - Bonus: Connect the `/data` folder to a database *or* create a [Prisma Schema](https://www.prisma.io/docs/orm/prisma-schema/overview) file. *Low Priority*

### Full-Stack Data Management

  - Display when a document was last published. *High Priority*
  - Replace the ID field in the people table with an image for the person. *High Priority*
  - Users can optionally filter the people table by who is in the audience for a published document. *Medium Priority*
  - Users can sort the people table by name. *Medium Priority*
  - Display the metadata fields in the people table. *Medium Priority*

### UX/Styling

  - Only the table body should scroll, not the whole page. *Medium Priority*
  - Highlight the current page in the nav. *Low Priority*
  - Debounce the search input to reduce the number of requests. *Low Priority*
  - Add a title to each page. *Low Priority*

## Submission

When you're done, fork this repository and submit a Pull Request to Blissbook. The Pull Request should include:

  - A description of what you changed and *why*. *High Priority*
  - How long you spent on the project. *High Priority*
  - A suggestion for how to improve this codebase and/or challenge. *Medium Priority*

Please submit the Pull Request by emailing a link to the Pull Request once you're ready for Blissbook to review it. If you'd prefer to keep the repository private, please add [me](https://github.com/SamDuvall) to the repository.
