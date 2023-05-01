# @chemistry/c14-next-web

[![GitHub Build Status](https://github.com/chemistry/ui.crystallography.io/workflows/CI/badge.svg)](https://github.com/chemistry/ui.crystallography.io/actions?query=workflow%3ACI)
[![License: MIT](https://img.shields.io/badge/License-MIT-gren.svg)](https://opensource.org/licenses/MIT)

New UI for the website

## Commands

Execute container

## Local Commands

* Serve project: `npm run serve`
* Build project: `npm run build`

## Build Docker Image

* Build docker image ``` docker build -t chemistry/c14-next-web . ```
* Run Docker image on 80 port ``` docker run -p 80:8060 chemistry/c14-next-web ```

## Build with Docker Compose

* Start application

```bash
docker compose down -v && docker compose up --build -d
```

* View Application Logs

```bash
docker compose logs
```

* Build docker image ``` docker compose up ```

## Setup Infrastructure

See documentation [here](setup/README.md)
