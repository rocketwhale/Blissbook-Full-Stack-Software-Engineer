// graphql/schema.ts
import { builder } from "./builder";
import "./types/Handbook";

export const schema = builder.toSchema();
