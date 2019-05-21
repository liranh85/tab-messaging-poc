let tab2

document.addEventListener('DOMContentLoaded', () => {
    // Cross-origin test: communication is now possible, because the iframe which loads this script has the same domain as the page we're communicating with
    // Upon receiving a message from the other tab, we will use `postMessage` to send it to the parent window
    setupIframeCommunication()
    openTab2({ sameDomain: false })
})

function openTab2({ sameDomain = true } = {}) {
    const url = sameDomain ? 'tab2.html' : 'http://127.0.0.1:8082/tab2.html'
    log(`Opening ${url}`, { sameDomain })
    tab2 = window.open(url, '_blank')
}

function setupIframeCommunication() {
    log('Setting up iframe communication')
    window.addEventListener('message', ({ data }) => {
        log(`Recieved message from iframe: ${data}`)
        if (data === 'close') {
            log('Closing tab2')
            tab2.close()
        }
    })
}

function log(message) {
    console.log(`tab1: ${message}`)
}