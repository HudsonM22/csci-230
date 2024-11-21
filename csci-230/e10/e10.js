
const circles = document.querySelectorAll('.circle')
const containers = document.querySelectorAll('.container')

let leftCount = 5
let centerCount = 5
let rightCount = 5

circles.forEach(circle => {
    circle.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id)
        e.dataTransfer.setData('parent-id', e.target.parentElement.id) //gets the origin id for counter logic
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault()
    })
})

containers.forEach(container => {
    container.addEventListener('drop', (e) => {
        e.preventDefault()

        //counter logic
        const targetID = e.target.id
        const parentID = e.dataTransfer.getData('parent-id')
        //console.log(parentID)
        //console.log(targetID)\
        if(targetID != parentID){ //prevents you from being able to place the element in its own box and increment its timer
            let canBeDropped = true

            switch(targetID){
                case 'left-container':
                    canBeDropped = incrementCounter({pos:1,origin:parentID})
                    break
                case 'center-container':
                    canBeDropped = incrementCounter({pos:2,origin:parentID})
                    break
                case 'right-container':
                    canBeDropped = incrementCounter({pos:3,origin:parentID})
                    break
            }

            if(canBeDropped){
                const data = e.dataTransfer.getData('text')
                const draggedElement = document.getElementById(data)
                e.target.appendChild(draggedElement)
            }else{
                displayNo()
            }

            document.getElementById('left-counter').textContent = leftCount
            document.getElementById('center-counter').textContent = centerCount
            document.getElementById('right-counter').textContent = rightCount
        }
    })
})

function incrementCounter(container){ //100% not the best way to do this but i was sleepy \ 3:32 AM

    switch(container.pos){
        case 1:
            if(leftCount == 10){
                return false
            }else{
                leftCount++
                if(container.origin == 'center-container'){
                    centerCount--
                }else if (container.origin == 'right-container'){
                    rightCount--
                }
                return true
            }
        case 2:
            if(centerCount == 10){
                return false
            }else{
                centerCount++
                if(container.origin == 'left-container'){
                    leftCount--
                }else if (container.origin == 'right-container'){
                    rightCount--
                }
                return true
            }
        case 3:
            if(rightCount == 10){
                return false
            }else{
                rightCount++
                if(container.origin == 'left-container'){
                    leftCount--
                }else if (container.origin == 'center-container'){
                    centerCount--
                }
                return true
            }
    }
}


function displayNo(){
    document.getElementById("no-alert").style.opacity = 1
    setTimeout(() => {
        document.getElementById("no-alert").style.opacity = 0
    }, 4000)
}