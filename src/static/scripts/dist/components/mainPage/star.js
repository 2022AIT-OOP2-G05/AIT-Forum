import { Component } from "../../models/component-base.js";
export class Star extends Component {
    constructor(checked, hostId) {
        super("star", hostId, false, "");
        this.checked = checked;
        this.configure();
        this.renderContent();
    }
    configure() {
        if (this.checked)
            this.el.checked = true;
    }
    renderContent() { }
}
