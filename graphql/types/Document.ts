import { documents } from "../../data";
import { builder } from "../builder";
import type { PersonShape } from "./Person";

export type DocumentShape = {
  id: number;
  name: string;
  publishedAt?: Date;
  lastPublishedAt?: Date;
  archivedAt?: Date;
  audienceMembers?: PersonShape[];
};

export const Document = builder.objectRef<DocumentShape>("Document").implement({
  fields: (t) => ({
    id: t.exposeInt("id"),
    name: t.exposeString("name"),
    publishedAt: t.expose("publishedAt", {
      type: "Date",
      nullable: true,
    }),
    archivedAt: t.expose("archivedAt", {
      type: "Date",
      nullable: true,
    }),
  }),
});

builder.queryField("documents", (t) =>
  t.field({
    args: {
      search: t.arg({
        type: "String",
      }),
      showArchived: t.arg({
        type: "Boolean",
      }),
    },
    type: [Document],
    resolve: (_, { search, showArchived }) => {
      let results = documents;
      if (search) results = results.filter((h) => h.name.toLowerCase().includes(search.toLowerCase()));
      if (!showArchived) results = results.filter((h) => !h.archivedAt);
      return results;
    },
  }),
);
