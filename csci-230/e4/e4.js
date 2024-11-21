setInterval(() => { //sub moves every 4 seconds after 18 seconds
    const elm = document.getElementById("sub");

    elm.classList.add("sub-anim");

    setTimeout(() => {
        elm.classList.remove("sub-anim"); //waits 17 seconds then removes it from that class
    }, 17000);
}, 18000); //plays anim by adding it to animating class and then removes it and waits some time

setInterval(() => { //fishing line
    const elm = document.getElementById("hook");

    elm.classList.add("bounce-anim");

    setTimeout(() => {
        elm.classList.remove("bounce-anim"); //waits 5 seconds then removes it from that class
    }, 7000);
}, 8000);