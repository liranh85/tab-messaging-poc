document.addEventListener('DOMContentLoaded', () => {
    init()
})

function init() {
    console.log('In tab2')
    message_broadcast({ command: 'doit', data: 'Hello from tab2 using localStorage!' })
}

function message_broadcast(message) {
    localStorage.setItem('message', JSON.stringify(message))
    localStorage.removeItem('message')
}