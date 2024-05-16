import type { PersonShape } from "@/graphql/types";
import { City, Country, State } from "country-state-city";
import simpsons from "./simpsons.json"; // Credit: https://github.com/zuberdasu/simpsons_api

const countries = Country.getAllCountries();

export const people: PersonShape[] = simpsons.map((json, index) => {
  const country = countries[index];
  const state = State.getStatesOfCountry(country.isoCode)[index];
  const cities = City.getCitiesOfCountry(country.isoCode);
  const city = cities?.[index];

  return {
    id: index + 1,
    fullName: `${json.character}`,
    metadata: {
      country: country.name,
      state: state?.name,
      city: city?.name,
    },
  };
});
