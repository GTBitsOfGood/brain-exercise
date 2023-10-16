# Welcome to 'brain-exercise' 👋

> Mobile app for the Brain Exercise Initiative

## Pre-requisites

1. NodeJS v16+
2. Expo (on Android/iOS App Store)

## Install

```sh
yarn
```

## Usage

```sh
yarn start or yarn dev
```

This command starts a local Expo development server. On your phone, you will need to scan the generated QR code using the Expo app or navigate to the provided URL in a browser.

Make sure the connection type on the Expo dashboard is set to "Local".

## Run With Docker

1.  Install [Docker](https://docs.docker.com/engine/install/)
2.  Obtain the Bitwarden password from your EM. Create a `bitwarden.env` file and fill it in with the following contents:
    ```
    BW_PASSWORD=<your bitwarden password>
    ```
    This only needs to be done on your first run. After that, you should delete the file from your repository to avoid pushing it to Github.
3.  Start the application with Docker Compose: `docker compose up`

If you make any changes to the packages, you may need to rebuild the images. To do this, append --build to the above docker compose up command.

The Dockerized application will have live-reloading of changes made on the host machine.

Note: On linux-based operating systems, if you come across an entrypoint permission error (i.e. `process: exec: "./entrypoint.sh": permission denied: unknown`), run `chmod +x ./entrypoint.sh` to make the shell file an executable.

Windows Users: If you come across this error `exec ./entrypoint.sh: no such file or directory` when running the docker compose command, please follow this [Stackoverflow thread](https://stackoverflow.com/questions/40452508/docker-error-on-an-entrypoint-script-no-such-file-or-directory) to fix it.

## Bug Reporting

Please create a new bug report Github Issue to disclose any problems you might've found
changed readme to open PR
