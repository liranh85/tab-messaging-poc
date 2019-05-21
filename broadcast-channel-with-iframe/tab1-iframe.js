document.addEventListener('DOMContentLoaded', () => {
    // Cross-domain test: communication is now possible, because the iframe which loads this script has the same domain as the page we're communicating with
    // Upon receiving a message from the other tab, we will use `postMessage` to send it to the parent window
    init({ sameDomain: false })
})

function init({ sameDomain = true } = {}) {
    console.log({ sameDomain })
    const url = sameDomain ? 'tab2.html' : 'http://127.0.0.1:8082/tab2.html'
    const bc = new BroadcastChannel('chargeafter_channel')
    bc.onmessage = message_receive
    const tab2 = window.open(url, '_blank')
    window.setTimeout(() => tab2.close(), 500)
}

function message_receive(message) {
    console.log(message.data)
    console.log('posting message to parent window')
    parent.postMessage(message.data, '*')
}