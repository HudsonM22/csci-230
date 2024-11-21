
const images = ["Images/image1.jpg", "Images/image2.jpg", "Images/image3.jpg", "Images/image4.jpg", "Images/image5.jpg"]
const loadIndicator = document.createElement("div")
loadIndicator.id = "load-indicator"
loadIndicator.innerHTML = `
    <l-ring-2
    size="40"
    stroke="5"
    stroke-length="0.25"
    bg-opacity="0.1"
    speed="0.8"
    color="white" 
    ></l-ring-2>
`
//from UI ball its a spinny load thing https://uiball.com/ldrs/ I import the script in the html head
document.getElementById("main").appendChild(loadIndicator)

let imageCount = 0

function createPane() {
    const pane = document.createElement("div")
    pane.className = "pane"

    //I think this may be a tad inconsistent but would work
    if (Math.random() < 0.3) {
        const img = document.createElement("img")
        img.src = images[Math.floor(Math.random() * images.length)] //random image src from array ^^
        img.style.width = "100%"
        img.style.height = "100%"
        pane.appendChild(img)
        imageCount++
    }

    return pane
}


const observer = new IntersectionObserver((arr) => {
    arr.forEach(entry => {
        if (entry.isIntersecting) {
            for (let i = 0; i < 3; i++) { //probably a better way to do this, than a for loop but it works
                const newPane = createPane()
                document.getElementById("main").insertBefore(newPane, loadIndicator) //adds the newPane before the load indicator at the bottom of main 3x
            }
        }
    })
}, 
{ //very fidgety i think these work the best but could be wrong, you can just see the loader before its gone
    root: document.getElementById("main"), 
    rootMargin: "0px", 
    threshold: 1.0 
})

observer.observe(loadIndicator)


const counterH6 = document.getElementById("counter")

mutationObserver = new MutationObserver(() => {
    const totalChildren = document.getElementById("main").children.length;
    counterH6.textContent = `Total: ${totalChildren - 2} Images: ${imageCount}` //have to do minus 2 because h6 and the loader is in main
})

mutationObserver.observe(document.getElementById("main"), {childList: true})
