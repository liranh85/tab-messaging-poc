(function BroadcastChannelPolyfill() {
    if (!('BroadcastChannel' in window)) {
        console.log('Using BroadcastChannel polyfill')
        window.BroadcastChannel = function(name) {
            this.channelName = name
            this.onmessage = function() {}

            var self = this

            window.addEventListener("storage", function(event) {
                if (event.key != 'message') {
                    // ignore other keys
                    return
                }
                var message = JSON.parse(event.newValue)
                if (!message) {
                    // ignore empty msg or msg reset
                    return
                }

                if (message.channel === self.channelName) {
                    self.onmessage(message)
                }
            })
        }
        window.BroadcastChannel.prototype.postMessage = function(msg) {
            localStorage.setItem('message', JSON.stringify({ channel: this.channelName, data: msg }))
            localStorage.removeItem('message')
        }
    }
})()