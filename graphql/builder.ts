import SchemaBuilder from "@pothos/core";
import RelayPlugin from "@pothos/plugin-relay";
import SimpleObjectsPlugin from "@pothos/plugin-simple-objects";
import { DateResolver } from "graphql-scalars";

export const builder = new SchemaBuilder<{
  Scalars: {
    Date: {
      Input: Date;
      Output: Date;
    };
  };
}>({
  plugins: [RelayPlugin, SimpleObjectsPlugin],
  relayOptions: {},
});

builder.addScalarType("Date", DateResolver, {});

builder.queryType({
  fields: (t) => ({
    ok: t.boolean({
      resolve: () => true,
    }),
  }),
});
