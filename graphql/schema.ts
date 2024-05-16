// graphql/schema.ts
import { builder } from "./builder";
import "./types/Document";
import "./types/Person";

export const schema = builder.toSchema();
