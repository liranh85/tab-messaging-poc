# Tab messaging test

## Purpose
We want to create a POC for messaging between tabs of different origins

## Pre-requisites
Install `http-server`
```
npm i -g http-server

```

## Setup
Start a server in port 8081 for tab1.html
```
http-server -p 8081
```
Start a server in port 8082 for tab2.html and tab1-iframe.html
```
http-server -p 8082
```

## Running the experiment
1. In your browser, navigate to http://localhost:8081/tab1.html
1. You will see a new tab opening and after 500 ms closing
1. Open the Dev Tools and go to the console
1. You will see the following:
    1. The iframe (loaded by tab1 of origin X, but having origin Y) receives a message from tab2 (of origin Y)
    1. The iframe posts the message to the parent window
    1. The parent window receives the message

## TO DO
This solution will currently only work in Chrome and Firefox. We need to add a polyfill for other browsers, e.g. Safari