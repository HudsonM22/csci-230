import {data} from "./data/data.js"
import {People} from "./data/People.js"
import {peopleCard} from "./components/peopleCard.js"

const Neighbors = [];

data.map((elm) => {
    Neighbors.push(new People(elm.name, elm.address, elm.phone_number, elm.email, elm.date_of_birth, elm.gender));
}) 
//reused from e7

for(let person of Neighbors) {
    let card = new peopleCard(person);
    document.querySelector("scrollable-pane").appendChild(card);
}