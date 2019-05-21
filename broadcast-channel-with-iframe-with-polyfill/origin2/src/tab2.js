document.addEventListener('DOMContentLoaded', () => {
    init()
})

function init() {
    log('Redirecting to tab3 (different origin) in 3 seconds')
    window.setTimeout(() => {
        window.location.replace('http://127.0.0.1:8083')
    }, 3000)
}

function log(message) {
    console.log(`Tab2: ${message}`)
}