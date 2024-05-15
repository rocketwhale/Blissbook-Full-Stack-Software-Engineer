import { handbooks } from "../../data/handbooks";
import { builder } from "../builder";

export type HandbookShape = {
  id: string;
  name: string;
  archivedAt?: Date;
};

export const Handbook = builder.objectRef<HandbookShape>("Handbook").implement({
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    archivedAt: t.expose("archivedAt", {
      type: "Date",
      nullable: true,
    }),
  }),
});

builder.queryField("handbooks", (t) =>
  t.field({
    args: {
      showArchived: t.arg({
        type: "Boolean",
      }),
    },
    type: [Handbook],
    resolve: (_, { showArchived }) => {
      let results = handbooks;
      if (!showArchived) results = results.filter((h) => !h.archivedAt);
      return results;
    },
  })
);
