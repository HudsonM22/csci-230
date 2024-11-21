import {data} from './data/data.js'
import {People} from './data/People.js'

const Neighbors = [];

data.map((elm) => {
    Neighbors.push(new People(elm.name, elm.address, elm.phone_number, elm.email, elm.date_of_birth, elm.gender));
})



Neighbors.forEach(elm => {
    document.body.insertAdjacentHTML('beforeend', `
        <div class="display-box">
        <div class="person">
            <div class="info-top">
                <h6>name: ${elm.name}</h6>
                <h6>address: ${elm.address}</h6>
                <h6>phone number: ${elm.phoneNumber}</h6>
            </div>
            <div class="info-bottom">
                <h6>email: ${elm.email}</h6>
                <h6>date of birth: ${elm.dateOfBirth}</h6>
                <h6>gender: ${elm.gender}</h6>
            </div>
        </div>
    </div>
    `);
});