//i would like to apologize in advance there were many hours spent in stack overflow and web docs to even come close to comleting this so sorry if the ocde is hard to understand.
const textBox = document.getElementById("text-box")
const checkBox = document.getElementById("check-box")


//drops down the input celebrity your related to text box
checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
        document.getElementById("check-container").insertAdjacentHTML("beforeend", `
            <label id=\"celeb-label\">Who is it:</label><input type=\"text\" id=\"celeb-name\">
        `)
    }else{
        const labelForCeleb = document.getElementById("celeb-label")
        const TextForCeleb = document.getElementById("celeb-name")

        document.getElementById("check-container").removeChild(labelForCeleb)
        document.getElementById("check-container").removeChild(TextForCeleb)
    }   
})

let request = indexedDB.open("e16", 5)

request.onupgradeneeded = (e) => {
    const db = e.target.result

    if (!db.objectStoreNames.contains("favoriteMovie")) { //the ifs check to make sure im not making a bunch of duplicates otherwise the browser yells at me, I had to look a lot up to do this.
        db.createObjectStore("favoriteMovie", { keyPath: "id" })
    }
    if (!db.objectStoreNames.contains("relatedCeleb")) {
        db.createObjectStore("relatedCeleb", { keyPath: "id" })
    }
    if (!db.objectStoreNames.contains("relatedCelebName")) {
        db.createObjectStore("relatedCelebName", { keyPath: "id" })
    }
    if (!db.objectStoreNames.contains("favoriteDecade")) {
        db.createObjectStore("favoriteDecade", { keyPath: "id" })
    }
    console.log("Database initated and made.")
}

let db

request.onsuccess = (e) => { //I genuinely dont know where e comes from, ive done research and i cant see what it is. i guess im bad at research
    db = e.target.result
}

request.onerror = (e) => {
    console.log("Error with db")
}

const button = document.getElementById("submit")
//checks when you click the button then adds all the data to their repective stores in the indexedDB
button.addEventListener("click", () => {
    db.transaction("favoriteMovie", "readwrite").objectStore("favoriteMovie").put({id:1, value: textBox.value}) //i learned if you use put instead of add it will overwrite whats already there.
    db.transaction("relatedCeleb", "readwrite").objectStore("relatedCeleb").put({id:1, value: checkBox.checked})
    if(checkBox.checked){
        const celebNameText = document.getElementById("celeb-name").value
        db.transaction("relatedCelebName", "readwrite").objectStore("relatedCelebName").put({id:1, value: celebNameText})
    }
    let radioChosen = ''
    const radios = document.getElementsByName("radio")
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radioChosen = radios[i].value
            break
        }
    }
    db.transaction("favoriteDecade", "readwrite").objectStore("favoriteDecade").put({id:1, value:radioChosen})

    displayIndexDB()//calls the function to display it
})

//async handles and assigns the data to a variable and then puts it on the list on the DOM
async function displayIndexDB() {
    const favoriteMovie = await getFromDataBase("favoriteMovie")
    const isRelated = await getFromDataBase("relatedCeleb")
    const relatedCelebName = await getFromDataBase("relatedCelebName")
    const favoriteDecade = await getFromDataBase("favoriteDecade")

    //console.log(favoriteMovie, isRelated, relatedCelebName, favoriteDecade)
    if(document.getElementById("form-content-container")){ //this is so it is dynamic, it essentially delets the old one and immediatly replaces it with the new
        document.getElementById("form-content-container").remove()
    }
    document.getElementById("body").insertAdjacentHTML("beforeend", `
    <div id="form-content-container">
        <ul>
            <li>
                <label>Favorite Movie: ${favoriteMovie}</label>
            </li>
            <li>
                <label>Are you related to a celeb: ${isRelated}</label>
            </li>
            <li>
                <label>Related Celebs Name: ${relatedCelebName}</label>
            </li>
            <li>
                <label>Favorite Decade: ${favoriteDecade}</label>
            </li>
        </ul>
    </div>
    `)
}

function getFromDataBase(dbName) { //modular way of retrieving the db info. im quite proud of this function.
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(dbName, "readonly")
        const store = transaction.objectStore(dbName)

        const request = store.get(1)

        request.onsuccess = () => { 
            resolve(request.result.value)
        }

        request.onerror = () => {
            console.log(dbName + " database error")
        }
    })
}
//this experiment was a lot harder than the rest because i completely forgot how to do this from you lecture.