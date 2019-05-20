document.addEventListener('DOMContentLoaded', () => {
    init()
})

function init() {
    console.log('In tab1')
    window.addEventListener("storage", message_receive)
    const tab2 = window.open('tab2.html', '_blank')
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