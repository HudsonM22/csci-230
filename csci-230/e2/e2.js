//the reason the order is really weird was because I coded the order in order of the input types based on the list Mozillas documentation provides. tad confusing but i label as much as i can
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input


let isUseraDog = true;
let isUserOnMars = false;

//button########################################################
const buttonPressed = function () { //teleport to mars button that is highly complex and sends the user to mars as long as theyre not dogs
    const checkbox = document.getElementById('checkboxBox');
    if(checkbox.checked){
        window.alert("Unfortunately this button can only teleport humans please uncheck \"Are you a dog\"");//ignore this
    }else{
        document.body.style.backgroundImage = "url('Spinning_Mars.gif')";
        document.body.style.backgroundSize = "100% 100%";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center"; //sets the backgrouund to mars if theyre not a dog

        document.querySelectorAll(".formLabel").forEach((elm) => {
            elm.style.color = "white";
        });

        isUserOnMars = true; //marks the user as being on mars and turns the final form submission text to white
    }

    buttonVal = "clicked";
}

document.getElementById("buttonBox").addEventListener("click", buttonPressed);

//checkbox######################################################################################
const CheckBox = function () { //sets the user to a dog by default and then if they so dare to try to set themselves back to a human this corrects it
    const element = document.getElementById('checkboxBox');
    if(isUseraDog){    
        if(!element.checked){
            setTimeout(function(){ //stackoverflow said use setTimeout function then use a callback
                document.getElementById("checkboxBox").checked = true;
            }, 500);
        }
    }

    checkboxVal = element.checked; //learned that value always returns on for some reason
}

document.getElementById("checkboxBox").checked = true; //default dog
document.getElementById("checkboxBox").addEventListener("change", CheckBox);

//color box##############################################################################################################
const colorBox = function () { //changes background to what the user selected, unless were out of that color of course.
    const element = document.getElementById('colorBox');
    const colors = ["deeppink", "aquamarine", "lightcoral", "palegreen", "wheat", "white"];
    const randomColor = colors[parseInt(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor; 
    window.alert("Sorry but we are out of your selected color. here have " + randomColor);

    colorboxVal = element.value;
}

document.getElementById("colorBox").addEventListener("change", colorBox);

//date#####################################################################################
const date = document.getElementById('dateBox');

const dateBox = function () { //groundhog day https://www.youtube.com/watch?v=8skEQx5w8Cs 
    const element = document.getElementById('dateBox');

    setTimeout(function(){ //its always ground hog day whenever you try to change
        date.value = "1993-02-02";
        window.alert("Welcome to Groundhog Day, where every day is February 2nd!")
    }, 1300);

    dateVal = element.value;
}

date.value = "1993-02-02"; //default groundhog day
document.getElementById("dateBox").addEventListener("change", dateBox);

//date and time##############################################################################
const timeTravel = function () { 
    const element = document.getElementById('datetimeLocalBox');
    if(isUseraDog){
        window.alert("Sorry it looks like time travel hasnt been invented in your time yet. Try again in 200 years, or fix the flux capacitor.");
    }else{
        window.alert("be real, why would this work even if your a human. Try again in 200 years.")
    }

    datetimeLocalVal = element.value;
}

document.getElementById("datetimeLocalBox").addEventListener("change", timeTravel);

//email#################################################################################
const dogsEmail = function () { 
    const element = document.getElementById('emailBox');
    
    emailVal = element.value;
}

document.getElementById("emailBox").addEventListener("change", dogsEmail);

//file############################################################################
const uploadW2 = function () { 
    const element = document.getElementById('fileBox');
    console.log(element.value);


    fileVal = element.value;
}

document.getElementById("fileBox").addEventListener("change", uploadW2);

//hidden###############################################################
const hiddenKey = function () { 
    const element = document.getElementById('hiddenBox');
    

}

hiddenKey();



//image################################################################
const dogButton = function (event) { 
    const element = document.getElementById('imageBox');
    window.alert("it appears your already a dog. to be turned into a human you must input your phone number and recieve a verification code indicating your a human and type in the code into the Verification box. Try typing in your phone number.");
    event.preventDefault(); //stackoverflow says this is how you make the image not be a submit button, because its that by default for some reason
    pressedDogButton = true;

    imageVal = "clicked";
}

//flag variables for dog and phone number verification (it just tells you the code in the window.alert box)
let pressedDogButton = false;


document.getElementById("imageBox").addEventListener("click", dogButton);


//month#################################################################
const month = function () { 
    const element = document.getElementById('monthBox');
    
    monthVal = element.value;
}

document.getElementById("monthBox").addEventListener("change", month);


//number##################################################################
//this will be where you verifiy your NOT A DOG CODE
const verifyNotADog = function () { 
    const element = document.getElementById('numberBox');
    if(element.value == 738929){
        window.alert("you are a human");
        isUseraDog = false;

        addHumanRadio();//adds the radio option to get rid of dog food
    }else{
        window.alert("this doesnt seem to be the correct code, try later.");
    }

    numberVal = element.value;
}

document.getElementById("numberBox").addEventListener("change", verifyNotADog);


//password########################################################################
const ssn = function () { //social security number
    const element = document.getElementById('passwordBox');
    
    passwordVal = element.value;
}

document.getElementById("passwordBox").addEventListener("change", ssn);



//radio##############################################################################
//the idea here is to only allow the user to select dogfood unless they put in the verification code, if that happens they can pick i dont eat dog food im a human
const addHumanRadio = function () {// something that makes this unique from the others is that the value is assigned when the user hits submit
    const fieldsetParent = document.getElementById("radio");
    if(document.getElementById("humanRadio")){ //checks to see if human radio already exists so you cant keep spawning in radio bubbles
        return; //exits function
    }else{
        const radio = document.createElement("input");
        radio.type = "radio"; //adding attributes to the radio that will be added
        radio.name = "dogfood";
        radio.value = "human";
        radio.id = "humanRadio";
        fieldsetParent.appendChild(radio); //add element to the field set

        const label = document.createElement("label");
        label.htmlFor = "humanRadio";
        label.textContent = "I dont eat dog food, Im a human";
        label.className = "formLabel";

        fieldsetParent.appendChild(label); //add element to the field set
    }
}


//Range###########################################################
const ageDisplay = function () { //social security number
    const element = document.getElementById('rangeBox');
    const age = parseInt(element.value);
    const ageLabel = document.getElementById("age-label");
    
    switch(age){
    case 0:
        ageLabel.textContent = "Baby";
        rangeVal = "baby";
        break;
    case 1:
        ageLabel.textContent = "Young adult";
        rangeVal = "Young Adult";
        break;
    case 2:
        ageLabel.textContent = "Adult";
        rangeVal = "Adult";
        break;
    case 3:
        ageLabel.textContent = "Gramps";
        rangeVal = "Gramps";
        break;
    case 4:
        ageLabel.textContent = "💀";
        rangeVal = "💀";
        break;
    }

    
}

document.getElementById("rangeBox").addEventListener("input", ageDisplay);

//reset#################################################################


//search##################################################################
const search = function () { //search box, just simple since it doesnt really have functionality
    const element = document.getElementById('searchBox');
    
    searchVal = element.value;
}

document.getElementById("searchBox").addEventListener("input", search);

//telephone########################################################################
const telephone = function () { //gives the user the verification code after they pressed the dog button
    const element = document.getElementById('telBox');
    if(pressedDogButton){
        window.alert("your verification code is: 738929");
    }
    
    telVal = element.value;
}

document.getElementById("telBox").addEventListener("change", telephone);

//text ########################################################################
const text = function () { //simple AOL @
    const element = document.getElementById('textBox');

    textVal = element.value;
}

document.getElementById("textBox").addEventListener("change", text);

//time ########################################################################
const time = function () { //simple time
    const element = document.getElementById('timeBox');

    timeVal = element.value;
}

document.getElementById("timeBox").addEventListener("change", time);


//URL ########################################################################
const url = function () { //simple URL
    const element = document.getElementById('urlBox');

    urlVal = element.value;
}

document.getElementById("urlBox").addEventListener("change", url);


//week ########################################################################
const week = function () { //simple week
    const element = document.getElementById('weekBox');

    weekVal = element.value;
}

document.getElementById("weekBox").addEventListener("change", week);

//submit##############################################################################
const submitButton = function (event) { 
    event.preventDefault(); //makes it so it doesnt refresh the page and add the values to the DOM

    //needs to extract the value of the radio buttons since that is a little harder than the other usual ones
    const form = document.getElementById("formContainer");
    const radio = form.elements["dogfood"]; //this took some research https://developer.mozilla.org/en-US/docs/Web/API/RadioNodeList/value
    radioVal = radio.value;

   addToBottomOfPage();
}

document.getElementById("formContainer").addEventListener("submit", submitButton);


//probably not the best way of doing this but this stores all the values so it can be printed down at the bottom of the page
let buttonVal = "not clicked";//
let checkboxVal;//
let radioVal; //
let colorboxVal;//
let dateVal;//
let datetimeLocalVal;//
let emailVal;//
let fileVal; //
let hiddenVal = " ";//
let imageVal = "not clicked";//
let monthVal;//
let numberVal;//
let passwordVal;//
let rangeVal;//
let searchVal;//
let telVal;//
let textVal;//
let timeVal;//
let urlVal;//
let weekVal;//
//reset and submit val are not on this list since those are not really input things


const addToBottomOfPage = function () {
    console.log("button", buttonVal);
    console.log("checkbox", checkboxVal);
    console.log("radio", radioVal);
    console.log("colorbox", colorboxVal);
    console.log("date", dateVal);
    console.log("datetime-local", datetimeLocalVal);
    console.log("email", emailVal);
    console.log("file", fileVal);
    console.log("hidden", hiddenVal);
    console.log("image", imageVal);
    console.log("month", monthVal);
    console.log("number", numberVal);
    console.log("password", passwordVal);
    console.log("range", rangeVal);
    console.log("search", searchVal);
    console.log("tel", telVal);
    console.log("text", textVal);
    console.log("time", timeVal);
    console.log("url", urlVal);
    console.log("week", weekVal);

    document.getElementById("labelsContainer").insertAdjacentHTML('beforeend', `
    <label class="formLabel">Colorbox: ${colorboxVal} |</label>
    <label class="formLabel">Text: ${textVal} |</label>
    <label class="formLabel">Password: ${passwordVal} ssn |</label>
    <label class="formLabel">Email: ${emailVal} |</label>
    <label class="formLabel">URL: ${urlVal} facebook page link |</label>
    <label class="formLabel">Tel: ${telVal} |</label>
    <label class="formLabel">Number: ${numberVal} verification code |</label>
    <label class="formLabel">Range: ${rangeVal} age |</label>
    <label class="formLabel">Button: ${buttonVal} |</label>
    <label class="formLabel">Date: ${dateVal} this is the date you selected at first |</label>
    <label class="formLabel">Month: ${monthVal} |</label>
    <label class="formLabel">Week: ${weekVal} |</label>
    <label class="formLabel">Time: ${timeVal} |</label>
    <label class="formLabel">Datetime-local: ${datetimeLocalVal} time travel |</label>
    <label class="formLabel">Radio: ${radioVal} dog food |</label>
    <label class="formLabel">File: ${fileVal} |</label>
    <label class="formLabel">Image: ${imageVal} dog button |</label>
    <label class="formLabel">Hidden: ${hiddenVal} |</label>
    <label class="formLabel">Checkbox: ${checkboxVal} |</label>
    <label class="formLabel">Search: ${searchVal} |</label>`
    );
    
    if(isUserOnMars){
        document.querySelectorAll(".formLabel").forEach((elm) => {
            elm.style.color = "white";
        });
    }
}