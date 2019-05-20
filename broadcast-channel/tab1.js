document.addEventListener('DOMContentLoaded', () => {
    init()
})

function init() {
    console.log('In tab1')
    const bc = new BroadcastChannel('chargeafter_channel')
    bc.onmessage = message_receive
    const tab2 = window.open('tab2.html', '_blank')
    window.setTimeout(() => tab2.close(), 500)
}

function message_receive(message) {
    console.log(message.data)
}