//I add the shapes to array and when you click on it iterates in both directions of the array
const shape1 = document.getElementById("shape1");
const shape2 = document.getElementById("shape2");
const shape3 = document.getElementById("shape3");
const shape4 = document.getElementById("shape4");
const shape5 = document.getElementById("shape5");

let chainInProgressFlag = false

//event listeners
shape1.addEventListener('click', () => {
    setTimeout(() => {
        shape1Event();
        if(!chainInProgressFlag){
            chainEffect(0);
        } //calls chain effect so passing through its position in the array/chain
    }, 1000)
})

shape2.addEventListener('click', () => {
    setTimeout(() => {
        shape2Event();
        if(!chainInProgressFlag){
            chainEffect(1);
        }
    }, 1000)
})

shape3.addEventListener('click', () => {
    setTimeout(() => {
        shape3Event();
        if(!chainInProgressFlag){
            chainEffect(2);
        }
    }, 1000)
})

shape4.addEventListener('click', () => {
    setTimeout(() => {
        shape4Event();
        if(!chainInProgressFlag){
            chainEffect(3);
        }
    }, 1000)
})

shape5.addEventListener('click', () => {
    setTimeout(() => {
        shape5Event();
        if(!chainInProgressFlag){
            chainEffect(4);
        }
    }, 1000)
})


//assign the events to the shapes
function shape1Event(){
    shape1.style.animation = 'shake 1s linear'

    //so it can be clicked again
    setTimeout(() => {
        shape1.style.animation = "none"
    }, 1000)
}

function shape2Event(){
    shape2.style.animation = 'spin 1s linear'
    setTimeout(() => {
        shape2.style.animation = "none"
    }, 1000)
}

function shape3Event(){
    shape3.style.animation = 'mirror 1s linear'
    setTimeout(() => {
        shape3.style.animation = "none"
    }, 1000)
}

function shape4Event(){
    shape4.style.animation = 'slide 1s linear'
    setTimeout(() => {
        shape4.style.animation = "none"
    }, 1000)
}

function shape5Event(){
    shape5.style.animation = 'pulse 1s linear'
    setTimeout(() => {
        shape5.style.animation = "none"
    }, 1000)
}

//iterates through array based on where you clicked

async function chainEffect(index){

    chainInProgressFlag = true

    const shapeFunctions = [shape1, shape2, shape3, shape4, shape5];

    for(let start = index + 1;  start < shapeFunctions.length; start++){ //ripple effect.  starts from the clicked shape and goes to the right and left. looks cool
        await delay(1500);
        shapeFunctions[start].dispatchEvent(new Event('click'));
    }

    for(let start = index - 1;  start >= 0; start--){
        await delay(1500);
        shapeFunctions[start].dispatchEvent(new Event('click'));
    }
    await delay(1500);
    chainInProgressFlag = false; //makes it so this function only works if a chain isnt already in progress this stops a bunch of calls from happening after every event dispatch
}

//allows for their to be buffer between each shape's animation. I sat here for 30 minutes trying to figure out why all animations were playing
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}