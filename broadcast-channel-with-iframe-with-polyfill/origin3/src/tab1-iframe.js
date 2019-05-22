import BroadcastChannel from 'broadcast-channel'

document.addEventListener('DOMContentLoaded', () => {
    setupBroadcastChannel()
})

function setupBroadcastChannel() {
    log('Setting up BroadcastChannel')
    const bc = new BroadcastChannel('chargeafter_channel')
    bc.onmessage = message_receive
}

function message_receive(message) {
    // The BroadcastChannel polyfill we're using seems to have the message string directly in `message`, rather than in `message.data` (which is what the original BroadcastChannel Web API does)
    // Hence the following line
    const msg = message.data || message
    log(`Received message via BroadcastChannel: ${msg}`)
    log('Posting message to parent window')
    parent.postMessage(msg, '*')
}

function log(message) {
    console.log(`tab1-iframe: ${message}`)
}