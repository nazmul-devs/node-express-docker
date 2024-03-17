# Node App

This is a simple guide to Dockerize and run `my-app`.

## Dockerize

To Dockerize the application, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the root directory of the cloned repository.
3. Run the following command to build the Docker image: docker build -t my-app:v1 .

## Run Node App

Once the Docker image is built, you can run `my-app` using Docker. Follow these steps:

1. Run the following command to start the container: docker run -p 5000:5000 my-app:v1

This will start the `my-app` container and expose it on port 5000. You can access the application by visiting `http://localhost:5000` in your web browser.

```bash
docker build -t my-app:v1 .
```

```bash
docker run -p 5000:5000 my-app:v1
```
