import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';
import Header from './Header';
import Card from './Card';
import LoadingImage from './LoadingImage';
import {Page, Wrapper} from './sharedStyledComponents/styledComponents';



const CardBox = styled.div`
    width: 28%;
    background: rgba( 255, 255, 255, 0.1 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    color: white;
    margin: 10px 0px;
    padding: 20px;
`;

function Favourites({user, films}) {
    const [favouriteCharacters, setFavouriteCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const prepareCharacters = async () => {
      if (user) {
        const userFavourites = user.favouritesDetails;
        if (userFavourites.length === 0) {
            return setIsLoading(false);  
        } else {
            setFavouriteCharacters(userFavourites);
            return setIsLoading(false);
        } 
      } else {
        return setIsLoading(false);
      }
    }


    useEffect(() => (
    prepareCharacters()
    ), []);


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
      { favouriteCharacters.length > 0 ? favouriteCharacters.map((character) =>
            <Card character={character} films={films} key={uuid()} user={user} />
        ):
            <CardBox>Nothing to see here</CardBox>
        }
      </Wrapper>
    </Page>
  );
}

export default Favourites;
