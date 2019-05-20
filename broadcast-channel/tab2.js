document.addEventListener('DOMContentLoaded', () => {
    init()
})

function init() {
    console.log('In tab2')
    const bc = new BroadcastChannel('chargeafter_channel')
    bc.postMessage('Hello from tab2 using BroadcastChannel!')
}