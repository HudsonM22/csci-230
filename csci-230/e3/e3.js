let riddleCombo = "";
let riddleSolved = false
//checks if the key is pressed and keeps track by updating riddleComb variable
document.addEventListener('keydown', (event) => { //keypress event is deprecated
    let key = event.key;
    if(!riddleSolved){
        updateInputtedLetter(key);
    }

    if(key == 'r'){ //im not proud of this but i have no other ideas. this was my first solution and it worked so i kept it.
        riddleCombo = 'r';
    }else if(riddleCombo == 'r' && key == 'e'){
        riddleCombo = 're';
    }else if(riddleCombo == 're' && key == 'd'){
        riddleCombo = 'red';
        formUnlocked();
        riddleSolved = true;
    }else {
        riddleCombo = '';
    }
});

const updateInputtedLetter = function (key) { //updates text of the container that displays the key most recently typed
    document.getElementById("keys-wrapper").textContent = key;
}

const formUnlocked = function() {
    document.getElementById("riddle-holder").remove();
    document.getElementById("keys-wrapper").remove();
    document.getElementById("layer-2").insertAdjacentHTML("beforeend", `
        <div id="form-wrapper">
            <form id="form">
                <div id="username-container">
                    <label for="username">Username</label>
                    <input type="text" id="username">
                </div>
                <div id="password-container">
                    <label for="password">Password</label>
                    <input type="password" id="password">
                </div>
                <input type="submit" id="submit">
            </form>
        </div>
    `);
}

//riddle layer logic ^^^^

document.getElementById("body").addEventListener("submit", (event) => {
    event.preventDefault();

    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    if(username == 'agentX' && password == 'secret'){
        document.getElementById("layer-2").remove();
    }
});
