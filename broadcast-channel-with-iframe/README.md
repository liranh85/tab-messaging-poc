# Tab messaging test

## Purpose
We want to create a POC for messaging between tabs of different origins.

## Goal
We want the POC to achieve the following:
* In Tab 1 of origin X, load an iframe pointing to origin Z
* In Tab 1's script
    * Open a new tab - Tab 2, of origin Y
    * Listen to messages coming from the iframe
    * When receiving a message saying "close": close the opened tab
* In Tab 1's iframe (origin Z):
    * Set up a `BroadcastChannel` named *"chargeafter_channel"*
    * Forward all messages to the parent (Tab 1) via `parent.postMessage`
* In Tab 2 (origin Y), redirect to Tab 3 (origin Z)
* In Tab 3 (origin Z), post a message saying "close" in the *"chargeafter_channel"* via the `BroadcastChannel`
* This message will be received by Tab 1's iframe, which will forward it to Tab 1
* Tab 1 will then close the tab it opened

## Pre-requisites
1. Install `http-server`
```
npm i -g http-server

```
2. Ensure that you enable pop-ups in your browser

## Setup
Start a server in port 8081 for tab1.html
```
http-server -p 8081
```
Start a server in port 8082 for tab2.html
```
http-server -p 8082
```
Start a server in port 8082 for tab3.html and tab1-iframe.html
```
http-server -p 8083
```

## Running the experiment
1. In your browser, navigate to http://localhost:8081/tab1.html
1. You will see a new tab opening and after 500 ms closing
1. Open the Dev Tools and go to the console
1. You will see the steps outlined in *Goal* above

## TO DO
This solution will currently only work in Chrome and Firefox. We need to add a polyfill for other browsers, e.g. Safari