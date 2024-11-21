export class peopleCard extends HTMLElement {
    
    static template = document.createElement("template")
    
    constructor(person){
        super()

        this.attachShadow({ mode:"open"})

        let link = document.createElement("link")
        
        link.href = "components/peopleCard.css"
        link.rel = "stylesheet"

        this.shadowRoot.append(link)

        peopleCard.template.innerHTML = `
            <div id="display-box">
                <div id="person">
                    <div id="info-top">
                        <h6>name: ${person.name}</h6>
                        <h6>address: ${person.address}</h6>
                        <h6>phone number: ${person.phoneNumber}</h6>
                    </div>
                    <div id="info-bottom">
                        <h6>email: ${person.email}</h6>
                        <h6>date of birth: ${person.dateOfBirth}</h6>
                        <h6>gender: ${person.gender}</h6>
                    </div>
                </div>
            </div>
        `
        let clone = peopleCard.template.content.cloneNode(true)
        this.shadowRoot.append(clone)
    }


}

customElements.define("people-card", peopleCard)