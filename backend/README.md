# Backend

A RESTful API to handle user data.

Implemented in `Node.js` with:

- [express](http://expressjs.com/) for Web Framework
- [finale](https://github.com/tommybananas/finale) for REST and [milestones](https://github.com/tommybananas/finale/blob/master/docs/Milestones.md) to customize controllers
- [sequelize](https://sequelize.org/) for ORM
- [pg](https://github.com/brianc/node-postgres) for PostgreSQL database

## Getting Started

### Requirements

- [node.js][node] 12.20.1+
- [yarn][yarn]
- [docker][docker]
- [docker-compose][docker-compose]

[node]: https://nodejs.org/en/download/
[yarn]: https://classic.yarnpkg.com/en/docs/install
[docker]: https://docs.docker.com/install/
[docker-compose]: https://docs.docker.com/compose/install/

### Installation

Install dependencies:

```sh
yarn install
```

Run unit tests:

```sh
yarn test
```

### Environment variables

Create a copy of `default.env` file:

```sh
cp default.env .env
```

Customise if needed.

### Compose the containers

#### Start API

Run the API locally with:

```sh
docker-compose up
```

This should result in:

- API available at http://localhost:3000
- Postgres available at http://localhost:5432

Compose re-uses the existing Docker images. In order to rebuild it use:

```sh
docker-compose up --build
```

In this case, set `DB_HOST` to:

- `host.docker.internal` on MacOS
- `172.17.0.1` on Linux
- `10.0.75.1` on Windows

Auto-restart with `nodemon` in another terminal:

```sh
docker-compose stop backend
yarn run start:dev
```

Or:

```
docker-compose up -d db
yarn run start:dev
```

In this case, set `DB_HOST` to `localhost`
