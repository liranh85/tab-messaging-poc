document.addEventListener('DOMContentLoaded', () => {
    setupBroadcastChannel()
})

function setupBroadcastChannel() {
    log('Setting up BroadcastChannel')
    const bc = new BroadcastChannel('chargeafter_channel')
    bc.onmessage = messageReceive
}

function messageReceive(message) {
    log(`Received message via BroadcastChannel: ${message.data}`)
    log('Posting message to parent window')
    parent.postMessage(message.data, '*')
}

function log(message) {
    console.log(`tab1-iframe: ${message}`)
}
