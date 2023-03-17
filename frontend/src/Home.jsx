import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import Header from "./Header";
import Card from "./Card";
import LoadingImage from "./LoadingImage";
import Pagination from "./Pagination";
import { getCharacters } from "./api";
import { Page, Wrapper } from "./sharedStyledComponents/styledComponents";

function Home({ user, films }) {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [charCount, setCharCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCharacters = async () => {
    setIsLoading(true);
    getCharacters(currentPage)
      .then((response) => {
        response && setCharacters(response.results);
        response && setCharCount(response.count);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("ERROR WHILE FETCHING PAGE DATA: ", err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, [currentPage]);

  if (isLoading) {
    return (
      <Page>
        <Header />
        <LoadingImage />
      </Page>
    );
  }

  return (
    <Page>
      <Header />
      <Wrapper>
        {characters &&
          characters.map((character) => (
            <Card
              character={character}
              films={films}
              key={uuid()}
              user={user}
            />
          ))}
      </Wrapper>
      <Pagination currentPage={currentPage} />
    </Page>
  );
}

export default Home;
