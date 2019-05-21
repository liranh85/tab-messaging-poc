document.addEventListener('DOMContentLoaded', () => {
    init()
})

function init() {
    console.log('In tab2')
    const bc = new BroadcastChannel('chargeafter_channel')
    window.setTimeout(() => {
        bc.postMessage('close')
    }, 2000)
}