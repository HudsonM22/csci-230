
// If someone navigates to login screen and is already logged in, then redirect them
// to their last page
if (localStorage.getItem('username')) {
    history.back()
}

/*** User is not logged in ***/

document.querySelector('#logInButton').addEventListener('click', () => {
    // TODO: Get the data from the form


    // TODO: Verify that all of the fields have valid input.  If not inform the user of
    // what is missing and then return from this function so the code below is not executed.
    const username = document.getElementById("name").value
    const password = document.getElementById("password").value

    let missingFields = []

    let fieldsFilled = true
    let validLogin = false

    if(!username){
        missingFields.push(" Username")
        fieldsFilled = false
    }
    if(!password){
        missingFields.push(" Password")
        fieldsFilled = false
    }

    //this is a bad way of doing this but this would usually be done on backend so i think this is how it would be implemented
    if(username == localStorage.getItem("username") && password == localStorage.getItem("password")){
        validLogin = true
    }else{

    }


    // We'll pretend we sent the user data with a fetch call to a server and the response came back
    // with a valid status code

    // TODO: Store the username from the form in localStorage

        /*** REPLACE THIS ***/
        localStorage.setItem("username", username)
    

    // Redirect the user to the home page
    if(fieldsFilled && validLogin){
        location.href = 'home.html'
    }else{
        if(!fieldsFilled){
            notification("please fill in: " + missingFields)
        }else if(!validLogin){
            notification("Invalid username or password")
        }
    }
})

function notification(message){
    document.getElementById("noti").textContent = message
    document.getElementById("noti").style.opacity = 1

    setTimeout(() => {
        document.getElementById("noti").style.opacity = 0
    }, 3000)
}