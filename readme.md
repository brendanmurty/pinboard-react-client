# Pinboard React Client

A front-end for the [Pinboard](https://pinboard.in/) bookmarking service created with [React](https://github.com/facebook/react/).

## Initial Setup

```
npm install
npm install -g forever
cp .env.example .env
```

Then set the appropriate values for the variables in the `.env` file.

## Development

To start a development server:

```
npm start
```

## Deployment

To create a production bundle:

```
npm run build
```

To start the production server:

```
npm run server
```

To stop the production server:

```
npm run serverstop
```
