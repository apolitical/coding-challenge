import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BackgroundImage from "./assets/space.jpg";
import { getFilms, fetchUser } from "./api";
import Home from "./Home.jsx";
import Favourites from "./Favourites.jsx";
import LoadingImage from "./LoadingImage";
import Header from "./Header";

const Page = styled.div`
  background-image: url(${BackgroundImage});
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  padding: 40px 0px;
`;

const EntryPoint = () => {
  const [user, setUser] = useState();
  const [films, setFilms] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const userData = await fetchUser();
    userData && setUser(userData);
    const filmList = await getFilms();
    filmList && setFilms(filmList.results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <Page>
        <Header />
        <LoadingImage />
      </Page>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home user={user} films={films} />}
        />
        <Route
          exact
          path="/home"
          render={() => <Home user={user} films={films} />}
        />
        <Route
          exact
          path="/favourites"
          render={() => <Favourites user={user} films={films} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default EntryPoint;
