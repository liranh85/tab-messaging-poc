document.addEventListener('DOMContentLoaded', () => {
    init()
    // Cross-domain test: communication is indeed not possible
    // init({ sameDomain: false })
})

function init({ sameDomain = true } = {}) {
    console.log({ sameDomain })
    console.log('In tab1')
    const url = sameDomain ? 'tab2.html' : 'localhost:8082/tab2.html'
    const bc = new BroadcastChannel('chargeafter_channel')
    bc.onmessage = message_receive
    const tab2 = window.open(url, '_blank')
    window.setTimeout(() => tab2.close(), 500)
}

function message_receive(message) {
    console.log(message.data)
}