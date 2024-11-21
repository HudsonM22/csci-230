// If someone navigates to login screen and is already logged in, then redirect them
// to their last page
if (localStorage.getItem('username')) {
    history.back()
}

document.querySelector("#createAccountButton").addEventListener("click", () => {
    // TODO: Get the data from the form


    // TODO: Verify that all of the fields have valid input.  If not inform the user of
    // what is missing and then return from this function so the code below is not executed.
    const fname = document.getElementById("fname").value
    const lname = document.getElementById("lname").value
    const username = document.getElementById("name").value
    const password = document.getElementById("password").value

    let missingFields = []

    let fieldsFilled = true

    if(!fname){
        missingFields.push(" first name")
        fieldsFilled = false
    }
    if(!lname){
        missingFields.push(" last name")
        fieldsFilled = false
    }
    if(!username){
        missingFields.push(" Username")
        fieldsFilled = false
    }
    if(!password){
        missingFields.push(" Password")
        fieldsFilled = false
    }

    // We'll pretend we sent the user data with a fetch call to a server and the response came back
    // with a valid status code

    // TODO: Store the username from the form in localStorage
        
        /*** REPLACE THIS ***/
        localStorage.setItem("fname", fname)
        localStorage.setItem("lname", lname)
        localStorage.setItem("username", username)
        localStorage.setItem("password", password)

    
    // Redirect the user to the home page
    if(fieldsFilled){
        location.href = "home.html"
    }else{
        document.getElementById("noti").textContent = "Please fill in:" + missingFields
        document.getElementById("noti").style.opacity = 1

        setTimeout(() => {
            document.getElementById("noti").style.opacity = 0
        }, 3000)
    }
})