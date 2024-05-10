import fetch from "isomorphic-fetch";

export const fetchUser = async () => {
  let user = null;
  try {
    const response = await fetch("http://localhost:3000/users/senior-candidate", {
      headers: {
        "x-api-key": "maythefourthbewithyou",
        "x-slug": "c2VuaW9yLWNhbmRpZGF0ZQ==",
      },
    });
    if (response.ok) {
      user = await response.json();
    } else {
      throw new Error(
        "call to http://localhost:3000/users/senior-candidate was unsuccessful"
      );
    }
  } catch (err) {
    console.error("Cannot retrieve user", err.message);
  }
  return user;
};

export const updateUserFavourites = async (favourites) => {
  try {
    const res = await fetch("http://localhost:3000/users/senior-candidate", {
      method: "PUT",
      body: JSON.stringify({ favourites }),
      headers: {
        "x-api-key": "maythefourthbewithyou",
        "x-slug": "c2VuaW9yLWNhbmRpZGF0ZQ==",
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Cannot update user favourites");
    }
    return true;
  } catch (error) {
    console.warn(
      "An error occured while trying to update user property:",
      error.message
    );
    return false;
  }
};

export const getFilms = async () => {
  let films = [];
  try {
    const response = await fetch("https://swapi.dev/api/films");
    if (response.ok) {
      films = await response.json();
    } else {
      throw new Error("call to https://swapi.dev/api/films was unsuccessful");
    }
  } catch (err) {
    console.error("Cannot retrieve films");
  }
  return films;
};

export const getCharacters = async (currentPage) => {
  let characters = [];
  try {
    const response = await fetch(
      `https://swapi.dev/api/people/?page=${currentPage}`
    );
    if (response.ok) {
      characters = await response.json();
    } else {
      throw new Error("call to https://swapi.dev/api/people was unsuccessful");
    }
  } catch (err) {
    console.error("Cannot retrieve characters");
  }
  return characters;
};
export const getIndividualCharacter = async (url) => {
  let character;
  try {
    const response = await fetch(url);
    if (response.ok) {
      character = await response.json();
    } else {
      throw new Error(`call to ${url} was unsuccessful`);
    }
  } catch (err) {
    console.error("Cannot retrieve individual character");
  }
  return character;
};

export const getPlanet = async (url) => {
  let planet;
  if (!url) {
    return null;
  }
  try {
    const response = await fetch(url);
    if (response.ok) {
      const planetData = await response.json();
      planet = planetData && planetData.name;
    } else {
      throw new Error(`call to ${url} was unsuccessful`);
    }
  } catch (err) {
    console.error("Cannot retrieve planet");
  }
  return planet;
};
