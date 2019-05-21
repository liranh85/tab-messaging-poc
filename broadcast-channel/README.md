# Tab messaging test

## Purpose
We want to create a POC for messaging between tabs of different origins.

At this stage, I was only testing messaging using the `BroadcastChannel`, **without using iframes**.

The test shows that messages can only be sent between tabs **of the same origin**.

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
Start a server in port 8082 for tab2.html
```
http-server -p 8082
```

## Configuration
### Same-origin test
In `tab1.js`, leave the code as is, calling `init()` without any params

### Cross-origin test
In `tab1.js`, change the call to `init()` as follows: `init({ sameDomain: false })`



## Running the experiment
1. In your browser, navigate to http://localhost:8081/tab1.html
1. You will see a new tab opening and after 500 ms closing
1. Open the Dev Tools and go to the console
1. If you used the same-origin configuration, you will see that tab1 receives a message from tab2 using the `BroadcastChannel`
1. If you used the cross-origin configuration, you will see that tab1 does not receive any messages from tab2