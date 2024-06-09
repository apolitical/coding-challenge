# Coding Challenge

## Overview

When you run the project, you should see a webpage that displays cards with information about Star Wars characters. This data is served from the [Star Wars API](https://swapi.dev/).

### Requirements

Before jumping into the installation instructions, make use you have all the tools installed on your local machine.

[node]: https://nodejs.org/en/download/
[yarn]: https://classic.yarnpkg.com/en/docs/install
[docker]: https://docs.docker.com/install/
[docker-compose]: https://docs.docker.com/compose/install/

### Environment variables

Create a copy of `default.env` file in the root folder:

```sh
cp default.env .env
```

### Installation

```
cd backend
cp default.env .env
yarn install
docker-compose up
```

This will run the backend on [http://localhost:3000](http://localhost:3000/).

When making changes use `docker-compose up --build` to refresh.

```
cd frontend
yarn install
yarn run start
```

This will run the frontend on [http://localhost:5000](http://localhost:5000/)

With newer versions of node, you might get a `ERR_OSSL_EVP_UNSUPPORTED` error. In this case, use: `NODE_OPTIONS=--openssl-legacy-provider yarn start` instead.

You will need to have both front end and back end running in order to properly access the functionality.

In order to stop the docker service, run:

```sh
docker-compose down
```

---

## Constraints

When working on this as a pairing exercise, we'd like you to implement as much as you can in the time that we have. It's most important to us that we can see your thought process and how you approach the problem. Please feel free to Google syntax, add console logs where helpful, commit as you see fit and narrate your thought process as you go.

We give you this repository in advance so you can get the project set up. Please do feel free to read through them and have a look at the code to familiarise yourself if you want to. 

### Suggestions

You’re welcome to use external libraries/packages necessary to build/run your project (ie. things like React, Vue, StyledComponents, Babel etc), but we would prefer that the logical requirements are done yourself, such as fetching the data, cleaning it up etc. We don’t expect to see production ready code, but we do want to see how you tackle the problem.

For styling, please feel free to use what you’re most comfortable with. We work with Styled Components, but we’re happy to see submissions in vanilla CSS, Sass/Less or similar if you'd rather add those. Our one ask here is that you do not use design component libraries such as Material Design or Base Web, as we’d like to see your skills.
Feel free to be as creative as you like with the UI!

The back end uses a framework called Finale to create the API. If you are not familiar with it, it might be helpful to have a look at its documentation: https://www.npmjs.com/package/finale-rest
