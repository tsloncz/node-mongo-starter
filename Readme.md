# Node Mongo API starter

[![Build Status](https://travis-ci.org/mjhea0/node-docker-api.svg?branch=master)](https://travis-ci.org/mjhea0/node-docker-api)

## Want to learn how to build this project?

This is project is still in progress

## Want to use this project?

### Setup

1. Fork/Clone this repo

1. Download [Docker](https://docs.docker.com/docker-for-mac/install/) (if necessary)

1. Developed using Docker version 17.06.0:

    ```sh
    $ docker -v
    Docker version 17.06.0-ce, build 02c1d87
    ```

### Build and Run the App

#### Set the Environment variables

```sh
$ export NODE_ENV=development
```

#### Fire up the Containers

Build the images:

```sh
$ docker-compose build
```

Run the containers:

```sh
$ docker-compose up -d
```

#### Sanity Check

Test out the following services...

##### (1) Authors - http://localhost:3000/api/author

| Endpoint        | HTTP Method | CRUD Method | Result        |
|-----------------|-------------|-------------|---------------|
| /author	      | GET         | READ        | [{Authors}]   |


##### (6) Functional Tests

With the app running, update the `NODE_ENV environment variable and then run the tests`:

```sh
$ export NODE_ENV=test
$ docker-compose up -d
$ docker-compose run tests npm test
```


Update `NODE_ENV` when you're ready to develop again:

```sh
$ export NODE_ENV=development
$ docker-compose up -d
```

#### Commands

To stop the containers:

```sh
$ docker-compose stop
```

To bring down the containers:

```sh
$ docker-compose down
```

Want to force a build?

```sh
$ docker-compose build --no-cache
```

Remove images:

```sh
$ docker rmi $(docker images -q)
```

Run unit and integration tests:

```sh
$ export NODE_ENV=test
$ docker-compose up -d
$ docker-compose run users-service npm test
$ docker-compose run locations-service npm test
```
