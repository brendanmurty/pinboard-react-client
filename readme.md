# Pinboard React Client

An alternative front-end for the [Pinboard](https://pinboard.in/) bookmarking service created with [React](https://reactjs.org/) and [Express](https://expressjs.com/).

## Initial Setup

```
npm install
cp .env.example .env
```

Then set the appropriate configuration values for the application in the `.env` file.

## Documentation

View more documentation in the [docs directory](docs/).

View the project's [todo list](docs/todo.md).

## Update the domain and port configuration

1. Stop the server
2. Edit the `APP_DOMAIN` and `APP_PORT` values in `.env`
3. Start the server again

## Scripts

### Compile a production-ready asset bundle

```
npm run build
```

### Start the web server

```
npm run start
```

### Compile asset bundle and start the web server

```
npm run build-start
```
