# Docker hands-on exercise

This is a simple exercise for building a Dockerfile. The repository contains a simple node app. Your task is to build a Dockerfile for the application and run the application with hot-reload working. Note that it is not needed to modify the application source code in order to complete the exercise.

The purpose of this lesson is to learn the basics of dockerizing an application.


## Task 1: Cloning this repository

1. Clone the repository to your computer

## Task 2: Run the code locally on your computer

1. Enter the cloned directory
1. Run the code. If you need help, see *Running the code* below.
1. Change code on src/index.js file. You should see the website update with your change.

## Task 3: Write and build a Dockerfile for your application
1. Write a Dockerfile for your application. First thing to do is to find a suitable base image for your application. After that you can think what steps are required in order to run your application on the chosen image.
2. After you have finished writing the Dockerfile you can build your image.

## Task 4: Run your application with docker
1. Run your application with docker. Think about what options are needed when running the container in order to access the application from the browser.

## Task 5: Run your application with docker with hot reload working
1. Run your application with docker in a way that hot reload is working. To verify that hot reload is working: Change code on src/index.js file. You should see the website update with your change. This means you are done with the exercise.

### Running the code locally

* Install [nodejs](https://nodejs.org/en/download/package-manager/).
* Go to the project directory using a terminal / shell.
* Install dependencies `npm install`
* Run the app `npm start`
* Open browser in [http://localhost:8080](http://localhost:8080)