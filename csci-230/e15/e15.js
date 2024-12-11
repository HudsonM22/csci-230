let sharedBuffer = new SharedArrayBuffer(1)
let arr = new Uint8Array(sharedBuffer)

let worker = new Worker("dedicated.js")


const startButton = document.getElementById("start-button")
const stopButton = document.getElementById("stop-button")

startButton.addEventListener("click", () => {
    worker.postMessage({ arr: sharedBuffer, toggle: true, resetN:false})
})

stopButton.addEventListener("click", () => {
    worker.postMessage({ arr: sharedBuffer, toggle: false, resetN:false})
})

worker.addEventListener("message", (e) => {
    console.log("worker sent back: " + e.data)
    const factorial = arr[0]
    if (arr[0] == 120) { //stops after 120 because 6! is 720 and well above 255 the max int for a Uint8Array, is what it is
        console.log('edge of max int allowed must be below 255')
        worker.postMessage({ arr: sharedBuffer, toggle: false, resetN:true}) //added reset n to 0 to restart factorial
        arr[0] = 1 //This resets it back so you can keep looping
    }
    
    const list = document.getElementById("list")
    const listItem = document.createElement("li")
    listItem.textContent = `Factorial: ${factorial}`
    listItem.id = "list-item"
    list.appendChild(listItem)
})
