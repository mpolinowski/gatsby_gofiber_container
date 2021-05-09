# GoFiber Docker Container for your Gatsby Build

I want to use a Gatsby.js project and serve it inside a Docker container (can be pushed into a Docker cluster or to Kubernetes, OpenShift etc.). For the demonstration I will use an [Gatsby MDX Starter](https://github.com/justinmahar/gatsby-starter-mdx-launchpad).


<!-- TOC -->

- [Preparation](#preparation)
- [Development](#development)
- [Prepare Deployment](#prepare-deployment)

<!-- /TOC -->


## Preparation

I installed the Starter with:


```bash
gatsby new gatsby_gofiber_container https://github.com/justinmahar/gatsby-starter-mdx-launchpad
```

And prepared a simplified variation of the [GoFiber Boilerplate](https://github.com/gofiber/boilerplate). To edit the Gatsby page code run:


```
gatsby develop
```


For the build I prepared an npm script that copies the static build from `public` to `fiber/public` - you can trigger the build script with:


```
npm run static
```

> __NOTE:__ that I wrote the script under Windows `rimraf fiber/public && gatsby build && move public fiber` - make changes, where necessary, when you are using a different OS.


## Development

Once you finalized your Gatsby code run the following command to start the GoFiber and serve your static page on port `8888`:

```bash
go run app.go
```

> Go to `http://localhost:8888`


## Prepare Deployment

We can now use the included Dockerfile to build our web app container:

```bash
docker build -t gofiber .
docker run -d -p 8888:8888 gofiber
```

> Go to `http://localhost:8888`