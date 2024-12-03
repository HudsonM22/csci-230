<<<<<<< HEAD
let arr = undefined
let work = false

let n = 0

self.addEventListener("message", (e) => {
    work = e.data.toggle

    if (e.data.resetN){
        n = 0
    }
    
    if (!arr) {
        arr = new Uint8Array(e.data.arr)
    } else {
        calculateFactorial()
    }
})

function calculateFactorial(){
    if (!work) {
        return null
    }

    let factorial = 1 //i wont lie I had to look up how to do this so this
    for (let i = 1; i <= n; i++) {
        factorial *= i
    }

    arr[0] = factorial

    postMessage(null);

    n++
    setTimeout(calculateFactorial, 1000) //waits a second before doing it again becasue it kept spamming it too fast
}
=======
let arr = undefined
let work = false

let n = 0

self.addEventListener("message", (e) => {
    work = e.data.toggle

    if (e.data.resetN){
        n = 0
    }
    
    if (!arr) {
        arr = new Uint8Array(e.data.arr)
    } else {
        calculateFactorial()
    }
})

function calculateFactorial(){
    if (!work) {
        return null
    }

    let factorial = 1 //i wont lie I had to look up how to do this so this
    for (let i = 1; i <= n; i++) {
        factorial *= i
    }

    arr[0] = factorial

    postMessage(null);

    n++
    setTimeout(calculateFactorial, 1000) //waits a second before doing it again becasue it kept spamming it too fast
}
>>>>>>> 784f87170bfab06e6c14e08c3fcb98b2d7048b40
