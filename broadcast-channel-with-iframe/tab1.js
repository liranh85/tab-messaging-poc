document.addEventListener('DOMContentLoaded', () => {
    setupIframeCommunication()
})
function setupIframeCommunication() {
    console.log('Setting up iframe communication')
    window.addEventListener('message', event => {
        console.log('Recieved message from iframe:', event.data)
    })
}
