let tab2

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button')
    if (button) {
        button.addEventListener('click', init)
    }
})

function init() {
    // Cross-origin test: communication is now possible, because the iframe which loads this script has the same domain as the page we're communicating with
    // Upon receiving a message from the other tab, we will use `postMessage` to send it to the parent window
    createIframe()
    setupIframeCommunication()
    openTab2()
}

function createIframe() {
    const iframe = document.createElement('iframe')
    const targetUrl = `http://${window.location.hostname}:8083`
    iframe.src = `${targetUrl}/tab1-iframe.html`
    iframe.style.display = 'none'
    document.body.append(iframe)
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

function openTab2() {
    const targetUrl = `http://${window.location.hostname}:8082/tab2.html`
    log(`Opening ${targetUrl} in 3 seconds`)
    window.setTimeout(() => {
        tab2 = window.open(targetUrl, '_blank')
    }, 3000)
}

function log(message) {
    console.log(`tab1: ${message}`)
}