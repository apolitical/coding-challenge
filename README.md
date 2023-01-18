# Code Challenge

Senior Software Engineer Code Challenge - 2021

## Overview

When you run the project, you should see a webpage that displays cards with information about Star Wars characters. This data is served from the [Star Wars API](https://swapi.dev/).

This readme contains one example of a front end task and one example of a back end task. During the pairing exercise, you will be presented with more tasks that are similar to the examples.

## Installation

Clone repository:

```sh
git clone https://gitlab.com/apolitical/code-tests/full-stack-code-challenge-2023.git
```

And then:

```sh
cd full-stack-code-challenge-2023
```

### Requirements

Before jumping into the installation instructions, make use you have all the tools installed on your local machine.

- [node.js][node] 12.20.1+
- [yarn][yarn]
- [docker][docker]
- [docker-compose][docker-compose]

[node]: https://nodejs.org/en/download/
[yarn]: https://classic.yarnpkg.com/en/docs/install
[docker]: https://docs.docker.com/install/
[docker-compose]: https://docs.docker.com/compose/install/

### Environment variables

Create a copy of `default.env` file in the root folder:

```sh
cp default.env .env
```

Customise if needed.

### Installation

```
cd backend
cp default.env .env
yarn install
docker-compose up
```
This will run the backend on [http://localhost:3000](http://localhost:3000/).

When making changes use docker-compose up --build to refresh.

```
cd frontend
yarn install
yarn run start
```

This will run the frontend on [http://localhost:5000](http://localhost:5000/)

With newer versions of node, you might get a ERR_OSSL_EVP_UNSUPPORTED error. In this case, use: NODE_OPTIONS=--openssl-legacy-provider yarn start instead.


You will need to have both front end and back end running in order to properly access the functionality.


----

Alternatively, you can compose the containers to get both the `frontend` and `backend` services running:

```sh
docker-compose up
```

You should now be able to access:
- The frontend on [http://localhost:5000](http://localhost:5000/)
- The backend on [http://localhost:3000](http://localhost:3000/)

In order to stop the services:

```sh
docker-compose down
```

If you need to run each project separately, please, follow the instructions on the `README` files on the `frontend` or `backend` folder.

### Front end Subtasks example

We would like you to implement:

- Pagination:
  - Description:
    We want to display a max of 10 cards per page, and have a way that users can navigate between pages to see further cards.

    In `Home.jsx`, we make an API call that fetches 10 characters. This uses a state object called `currentPage` to determine what page we fetch from the API. The API response returns the total count of characters, the link for the next page of the API and an array of 'character' objects that we use to populate the cards.
    This file also uses a component called `Pagination.jsx`.
    For this task, we'd like you to work on the pagination so that:
    - There is a button displayed for every page (10 character cards per page)
    - Clicking on a button updates `currentPage` and displays the character cards for that page


### Back end Subtasks example

We would like you to implement:

- Authorisation with API key coming on the x-api-key request header:
  - Description: The frontend currently makes calls to the backend using an API key but the backend is not validating it.
  - To be implemented in the file: backend/src/user/milestones/authorisation.js

## Constraints

When working on this as a pairing exercise, we'd like you to implement as much as you can in the time that we have. It's most important to us that we can see your thought process and how you approach the problem. Please feel free to Google syntax, add console logs where helpful, commit as you see fit and narrate your thought process as you go.


We give you this repository in advance so you can get the project set up. Please do feel free to read through them and have a look at the code to familiarise yourself if you want to, but we would prefer that you do not work on the tasks outside of the pairing session. We want to be mindful of your time, but it's also easier for us to see your approach if we do it together.



### Suggestions

You’re welcome to use external libraries/packages necessary to build/run your project (ie. things like React, Vue, StyledComponents, Babel etc), but we would prefer that the logical requirements are done yourself, such as fetching the data, cleaning it up etc. We don’t expect to see production ready code, but we do want to see how you tackle the problem. 

For styling, please feel free to use what you’re most comfortable with. We work with Styled Components, but we’re happy to see submissions in vanilla CSS, Sass/Less or similar if you'd rather add those. Our one ask here is that you do not use design component libraries such as Material Design or Base Web, as we’d like to see your skills.
Feel free to be as creative as you like with the UI!
