import { render, screen } from "@testing-library/react";
import Card from "./Card";

const films = [{ title: "A New Hope" }, { title: "The Empire Strikes Back" }];
const character = {
  birth_year: "19BBY",
  films: [
    "http://swapi.dev/api/films/1/",
    "http://swapi.dev/api/films/2/",
    "http://swapi.dev/api/films/3/",
    "http://swapi.dev/api/films/6/",
  ],
  homeworld: "http://swapi.dev/api/planets/1/",
  name: "Luke Skywalker",
  url: "http://swapi.dev/api/people/1/",
};

const user = {
  favourites: ["1", "2", "8", "9", "56", "53"],
};
beforeAll(() => jest.spyOn(window, "fetch"));
describe("Card tests", () => {
  test("renders card correctly", async () => {
    render(<Card films={films} character={character} user={user} />);
    await window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => "Tattooine",
    });
    const filmText = await screen.findByText(/A New Hope/i);
    expect(filmText).toBeInTheDocument();
    const characterText = await screen.findByText("Luke Skywalker");
    expect(characterText).toBeInTheDocument();
  });

  test("Shows selected correctly", async () => {
    render(<Card films={films} character={character} user={user} />);
    await window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => "Tattooine",
    });
    const header = await screen.findAllByTestId("heart-active-true");
    expect(header[0]).toBeInTheDocument();
  });
});
