//definetly not the best way to do this but it does work.
logAndDisplay('User Agent', navigator.userAgent) 
logAndDisplay('Platform', navigator.platform)
logAndDisplay('Language', navigator.language)
logAndDisplay('Online', navigator.onLine)
logAndDisplay('Cookies', navigator.cookieEnabled)
logAndDisplay('Hardware concurrency', navigator.hardwareConcurrency) //i have no clue what this is, but i saw it was an option...

logAndDisplay('Screen Width', screen.width) //screen size
logAndDisplay('Screen Height', screen.height)
logAndDisplay('Color Depth', screen.colorDepth)

logAndDisplay('Network Type', navigator.connection.effectiveType)
logAndDisplay('Downlink Speed', navigator.connection.downlink + ' Mbps')
logAndDisplay('Memory', navigator.deviceMemory)

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude
            logAndDisplay('Latitude', latitude)
            logAndDisplay('Longitude', longitude)
        }
    )
}

function logAndDisplay(label, value) {
    console.log(label + ': ' + value)

    const output = document.getElementById('output')
    const div = document.createElement('div')
    div.className = 'info-item'
    div.innerHTML = `
        <span class="label">${label}:</span>
        <span class="value">${value}</span>
    `
    output.appendChild(div)
}
//side note: im very proud of the color theme i did for my css

const allowButton = document.getElementById('allow-notifications')
const sendButton = document.getElementById('send-notification')

allowButton.addEventListener('click', () => {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            sendButton.disabled = false
            console.log('Notifications lookin good')
        } else {
            console.log('Notifications not good')
        }
    })
})

sendButton.addEventListener('click', () => {
    new Notification('Notification', {
        body: 'Hudson\'s notification'
    })
})
