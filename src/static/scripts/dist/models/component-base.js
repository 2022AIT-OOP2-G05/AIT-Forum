export class Component {
    constructor(templateId, hostElId, insertBefore, newId) {
        this.templateEl = document.getElementById(templateId);
        this.hostEl = document.getElementById(hostElId);
        const importedNode = document.importNode(this.templateEl.content, true);
        this.el = importedNode.firstElementChild;
        if (newId) {
            this.el.id = newId;
        }
        this.attach(insertBefore);
    }
    attach(insertBefore) {
        this.hostEl.insertAdjacentElement(insertBefore ? "afterbegin" : "beforeend", this.el);
    }
}
