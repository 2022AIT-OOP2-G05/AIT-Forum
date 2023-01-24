import { Component } from "../../models/component-base.js";
export class BackBtn extends Component {
    constructor() {
        super("back-btn", "app", true);
        this.configure();
        this.renderContent();
    }
    configure() {
        const link = this.el.querySelector("a");
        link.addEventListener("click", () => {
            window.location.href = "/";
        });
    }
    renderContent() {
        const link = this.el.querySelector("a");
        link.innerHTML = link.innerHTML + "戻る";
    }
}
