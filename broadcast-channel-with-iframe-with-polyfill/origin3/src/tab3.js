import BroadcastChannel from 'broadcast-channel'

document.addEventListener('DOMContentLoaded', () => {
    init()
})

function init() {
    log('Setting up BroadcastChannel')
    const bc = new BroadcastChannel('chargeafter_channel')
    log('Posting message via BroadcastChannel in 3 seconds')
    window.setTimeout(() => {
        bc.postMessage('close')
    }, 3000)
}

function log(message) {
    console.log(`Tab3: ${message}`)
}