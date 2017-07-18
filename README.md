# promotion-seed-app
Seed Application/Generator/Jumpstart Kit

## Prerequisites
1. Make sure [NodeJS](https://nodejs.org/en/download/) is installed

## How to run project
1. Clone this repository
3. Open a CLI of your choice
4. run `npm install`
5. run `npm start`

To build the project you can run `npm run build` in your CLI. The files will then output in build folder

## How to deploy to Bluemix
Clik the "Deploy to Bluemix" button after your logged into Bluemix and navigated to the correct Region, Org and Space. This button will create a Delivery Pipeline and two runtime environments (see [Bluemix Integration](#Bluemix-Integration)).

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/devops/setup/deploy/?repository=https://github.com/larshnordli/promotion-seed-app)


#Bluemix Integration
This integration will create a Delivery Pipeline and two runtime environments. **Remember that the name you give the toolchain will also be the name you give the app**:

- Delivery Pipeline
This Delivery Pipeline consists of three stages , a Build stage a Test Stage + Environment, and a Production Stage + Environment.

- Build
Webpack [add link] builds your code and fetches necessary packages. Public assets will be build to the `build`-folder. This is also where this stages is told that assets are built to, thus serving only this folder in subsequent stages.

- Test Stage + Environment
Includes a (currently empty) Test job that can do a test of your chioce. Deploys a test application `application-name*-test*` to a test environment.

- Production Stage + Environment
*Manual Deploy* If the test stage deploys the test application, and you as a user can see that everything is how it should be, you can move on to deploy to the production environment. This stage will not run if the test stage is successful by default, but can be configured.

----
Bjeff it up!™
