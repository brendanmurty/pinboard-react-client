# Pinboard React Client

A front-end for the [Pinboard](https://pinboard.in/) bookmarking service created with [React](https://github.com/facebook/react/).

## Initial Setup

```
npm install
cp .env.example .env
```

Then set the appropriate configuration values for the application in the `.env` file.

## Documentation

View more documentation in the [docs directory](docs/).

## Development

### Start a development server

```
npm start
```

## Deployment

### Create a production bundle

```
npm run build
```

### Update the domain and port to listen on

1. Stop the server
2. Edit the `APP_DOMAIN` and `APP_PORT` values in `.env`
3. Start the server again

### Create a production bundle and start the production server

```
npm run start-prod
```
