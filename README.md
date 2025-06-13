# Coding Challenge

## Overview

When you run the project, you should see a webpage that displays cards with information about Star Wars characters. This data is stored in our own internal sqllite database.

### Requirements

Before jumping into the installation instructions, make use you have all the tools installed on your local machine.

[node]: https://nodejs.org/en/download/
[yarn]: https://classic.yarnpkg.com/en/docs/install

Please use Node v20.19.2

### Installation

```
cd backend
cp default.env .env
yarn install
yarn prisma db seed
yarn start:dev
```

This will run the backend on [http://localhost:3000](http://localhost:3000/) and will hot reload.

```
cd frontend
cp default.env .env
yarn install
yarn dev
```

This will run the frontend on [http://localhost:3000](http://localhost:3000/) too.

You will need to have both front end and back end running in order to properly access the functionality.

---

## Constraints

When working on this as a pairing exercise, we'd like you to implement as much as you can in the time that we have. It's most important to us that we can see your thought process and how you approach the problem. You are welcome to ask as many questions as you'd like. Please feel free to Google syntax, add console logs where helpful, commit as you see fit and narrate your thought process as you go.

We give you this repository in advance so you can get the project set up. Please do feel free to read through them and have a look at the code to familiarise yourself if you want to.

### Suggestions

You’re welcome to use external libraries/packages necessary to build/run your project, but we would prefer that the logical requirements are done yourself, such as fetching the data, cleaning it up etc. We don’t expect to see production ready code, but we do want to see how you tackle the problem.

For the frontend, we are using [NextJS](https://nextjs.org/) with [Tailwind](https://tailwindcss.com/). For styling, please feel free to use what you’re most comfortable with. We work with Tailwind, but we’re happy to see submissions in vanilla CSS, Sass/Less or similar if you'd rather add those. Our one ask here is that you do not use design component libraries such as Material Design or Base Web, as we’d like to see your skills.
Feel free to be as creative as you like with the UI!

The back end uses [NestJS](https://nestjs.com/) to create the API.
