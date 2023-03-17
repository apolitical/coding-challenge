import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getPlanet, updateUserFavourites } from "./api";
import LoadingImage from "./LoadingImage";
import Heart from "./Heart";

const Wrapper = styled.div`
  width: 28%;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
  margin: 10px 0px;
  padding: 20px;
  position: relative;
`;
const Name = styled.h1`
  font-size: 1.2em;
`;

const ButtonWrapper = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Paragraph = styled.p``;

const Card = ({ character, films, user }) => {
  const [planet, setPlanet] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    let isMounted = true;
    getPlanet(character.homeworld)
      .then((response) => {
        if (isMounted) {
          setPlanet(response);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error("ERROR WHILE FETCHING PAGE DATA: ", err);
        setIsLoading(false);
      });

    setIsFavourite(true);
  }, [character, user]);

  const { name, birth_year } = character;

  const getfirstFilm = () => {
    const number = character.films[0].charAt(character.films[0].length - 2);
    const film = films[number - 1];
    if (film) {
      return film.title;
    } else {
      return "";
    }
  };
  const firstFilm = films ? getfirstFilm() : "";
  if (isLoading) {
    return (
      <Wrapper>
        <LoadingImage />
      </Wrapper>
    );
  }

  const handleClickButton = async () => {
    const selected = !isFavourite;
    const parts = character.url.split("/");
    const characterNumber = parts[parts.length - 2];
    let favourites = user.favourites;
    if (selected) {
      favourites.push(characterNumber);
    } else {
      const index = favourites.indexOf(characterNumber);
      index === 0 ? favourites.shift() : favourites.splice(index, index);
    }
    favourites = [...new Set(favourites)];
    updateUserFavourites(favourites)
      .then(() => {
        setIsFavourite(selected);
      })
      .catch((error) => {
        console.warn("Error saving a favourite:", error.message);
      });
  };
  return (
    <Wrapper>
      <ButtonWrapper onClick={user ? () => handleClickButton() : null}>
        <Heart active={isFavourite} />
      </ButtonWrapper>

      <Name>{name}</Name>
      <Paragraph>
        First film: {firstFilm}
        <br />
        Birth year: {birth_year}
        <br />
        Homeworld: {planet}
      </Paragraph>
    </Wrapper>
  );
};

export default Card;
