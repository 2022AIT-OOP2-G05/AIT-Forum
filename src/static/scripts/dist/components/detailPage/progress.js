import { Component } from "../../models/component-base.js";
export class Progress extends Component {
    constructor(id, value) {
        super("progress", id, false);
        this.value = value;
        this.configure();
        this.renderContent();
    }
    configure() {
        console.log(this.el);
        this.el.value = this.value;
    }
    renderContent() {
        this.el.querySelector("progress").value = this.value;
        this.el.querySelector(".progress_BG-top-left").innerHTML = `yes - ${this.value}%`;
        this.el.querySelector(".progress_BG-top-right").innerHTML = `no - ${100 - this.value}%`;
    }
}
