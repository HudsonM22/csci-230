
class ScrollablePane extends HTMLElement {
    
    static template = document.createElement("template")
    
    constructor(){
        super()

        this.attachShadow({ mode:"open"})

        let link = document.createElement("link")
        
        link.href = "components/scrollablePane.css"
        link.rel = "stylesheet"

        this.shadowRoot.append(link)

        ScrollablePane.template.innerHTML = `
            <div id="main-container">
                <h3>Your Neighbors</h3>
                <div id="scrollable-container">
                    <slot></slot>
                </div>
            </div>
        `
        let clone = ScrollablePane.template.content.cloneNode(true)
        this.shadowRoot.append(clone)
    }

    setTitle(title) {
        const elm = this.shadowRoot.querySelector("#title")
        elm.textContent = title
    }
}

customElements.define("scrollable-pane", ScrollablePane)