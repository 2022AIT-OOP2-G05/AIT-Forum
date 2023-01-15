import { Component } from "../../models/component-base.js";
export class Progress extends Component {
    constructor(id, value) {
        super("progress", id, false);
        this.value = value;
        this.configure();
        this.renderContent();
    }
    configure() {
        this.el.value = this.value;
    }
    renderContent() {
    }
}
