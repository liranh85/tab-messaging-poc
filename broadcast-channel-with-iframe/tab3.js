document.addEventListener('DOMContentLoaded', () => {
    init()
})

function init() {
    log('Setting up BroadcastChannel')
    const bc = new BroadcastChannel('chargeafter_channel')
    window.setTimeout(() => {
        log('Posting message via BroadcastChannel')
        bc.postMessage('close')
    }, 3000)
}

function log(message) {
    console.log(`Tab3: ${message}`)
}