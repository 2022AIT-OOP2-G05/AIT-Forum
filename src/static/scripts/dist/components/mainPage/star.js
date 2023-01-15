import { Component } from "../../models/component-base.js";
export class Star extends Component {
    constructor(hostId, checked, disabled) {
        super("star", hostId, false, "");
        this.checked = checked;
        this.disabled = disabled;
        this.configure();
        this.renderContent();
    }
    configure() {
        if (this.checked)
            this.el.checked = true;
        if (this.disabled)
            this.el.disabled = true;
    }
    renderContent() { }
}
