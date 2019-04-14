# Pinboard React Client

An alternative front-end for the [Pinboard](https://pinboard.in/) bookmarking service created with [React](https://reactjs.org/) and [Express](https://expressjs.com/).

![Screenshot of application](screenshot.png)

## Initial Setup

```
npm install
cp example.env .env
```

Then set the appropriate configuration values for the application in the `.env` file.

## Documentation

View more documentation in the [docs directory](docs/).

View the project's [todo list](docs/todo.md).

## License

You can view the [License](license.md) file for rights and limitations when using the code here in your own projects.

The license is based on the [CSS-Tricks License](https://css-tricks.com/license/) which was created by [Chris Coyier](https://github.com/chriscoyier/).

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
