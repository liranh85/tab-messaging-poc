document.addEventListener('DOMContentLoaded', () => {
    init()
    // Cross-domain test: communication is indeed not possible
    // init({ sameDomain: false })
})

function init({ sameDomain = true } = {}) {
    console.log({ sameDomain })
    console.log('In tab1')
    const url = sameDomain ? 'tab2.html' : 'localhost:8082/tab2.html'
    window.addEventListener("storage", message_receive)
    const tab2 = window.open(url, '_blank')
    window.setTimeout(() => tab2.close(), 1000)
}

function message_receive(ev) {
    if (ev.key != 'message') return // ignore other keys
    var message = JSON.parse(ev.newValue)
    if (!message) return // ignore empty msg or msg reset

    // here you act on messages.
    // you can send objects like { 'command': 'doit', 'data': 'abcd' }
    if (message.command == 'doit') console.log(message.data)

    // etc.
}