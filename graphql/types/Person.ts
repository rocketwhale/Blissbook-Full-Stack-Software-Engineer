import { people } from "../../data";
import { builder } from "../builder";

export type PersonShape = {
  id: number;
  fullName: string;
};

export const Person = builder.objectRef<PersonShape>("Person").implement({
  fields: (t) => ({
    id: t.exposeInt("id"),
    fullName: t.exposeString("fullName"),
  }),
});

builder.queryField("people", (t) =>
  t.field({
    args: {
      search: t.arg({
        type: "String",
      }),
    },
    type: [Person],
    resolve: (_, { search }) => {
      let results = people;
      if (search) results = results.filter((h) => h.fullName.includes(search));
      return results;
    },
  }),
);
