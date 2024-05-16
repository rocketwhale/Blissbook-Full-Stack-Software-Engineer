import { parse } from "graphql";
import { describe, expect, test } from "vitest";

import { assertSingleValue, executor } from "../schema.test";

describe("people", () => {
  async function getPeople(
    variables: {
      search?: string;
    } = {},
  ) {
    const result = await executor({
      document: parse(`
        query people ($search: String) {
          people (search: $search) {
            id
            fullName
          }
        }
      `),
      variables,
    });
    assertSingleValue(result);
    return result.data;
  }

  test("return all documents", async () => {
    const { people } = await getPeople();
    expect(people.length).toEqual(23);
  });

  test("return all documents w/ search", async () => {
    const { people } = await getPeople({
      search: "Simpson",
    });
    expect(people.length).toEqual(5);
  });
});
