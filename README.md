# Balls of Steel

Every time you click inside the window, a ball will appear. But wait! That's no regular ball! Oh, no. It will fall, just like you would fall if your pet eagle grabbed you by the shoulders and dropped you mid-air. The only difference is that the ball bounces.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You'll need [npm](https://www.npmjs.com/get-npm) in order to experience this awesome "thing", for lack of a better word.
To verify that you indeed have it on your system, in a terminal window, run:

```
$ npm -v
```

You should get:

```
6.0.0
```

After cloning the repo, it's time to install the dependencies. Run inside the cloned directory:

```
$ npm install
```

## Development

For development purposes, I created the npm script __dev__, which will create a development server provided by the [webpack-dev-server](https://github.com/webpack/webpack-dev-server) dependency. Run:

```
$ npm run dev
```

Now, whenever you modify a file and then save it, the dev server will live-reload the files and you can immediatelly see the changes in your browser.

## Running the tests

In order to run the tests, just run the following npm command:

```
$ npm run test
```

## Deployment

The next command will create/update your [dist](https://github.com/OnunPereira/BallsOfSteel/tree/master/dist) folder with all the files ready to be served!

```
$ npm run build
```