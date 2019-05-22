document.addEventListener('DOMContentLoaded', () => {
    init()
})

function init() {
    log('Redirecting to tab3 (different origin) in 3 seconds')
    window.setTimeout(() => {
        const targetUrl = `http://${window.location.hostname}:8083`
        window.location.replace(targetUrl)
    }, 3000)
}

function log(message) {
    console.log(`Tab2: ${message}`)
}