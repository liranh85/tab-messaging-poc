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
Ensure that you enable pop-ups in your browser

## One time setup
Install the dependencies
```
cd origin1
npm i
```

```
cd origin2
npm i
```

```
cd origin2
npm i
```

## Start the dev servers
```
cd origin1
npm start
```

```
cd origin2
npm start
```

```
cd origin3
npm start
```

## Running the experiment
1. In your browser, navigate to http://localhost:8081
1. This is Tab 1
1. 3 seconds later, a new tab will open with the address http://localhost:8082
1. 3 seconds later, the new tab will redirect to another webpage: http://localhost:8083
1. 3 seconds later, the tab will be closed by Tab 1
1. Open the Dev Tools and go to the console
1. You will see the steps outlined in *Goal* above

## TO DO
This solution will currently only work in Chrome and Firefox. We need to add a polyfill for other browsers, e.g. Safari