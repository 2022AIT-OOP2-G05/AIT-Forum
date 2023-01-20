import { Component } from "../../models/component-base.js";
export class Star extends Component {
    constructor(hostId, checked, disabled, index, value = 0, clickHandler) {
        super("star", hostId, false, "");
        this.checked = checked;
        this.disabled = disabled;
        this.index = index;
        this.value = value;
        this.clickHandler = clickHandler;
        this.hostId = "";
        this.hostId = hostId;
        this.configure();
        this.renderContent();
    }
    configure() {
        const input = this.el.querySelector("input");
        const label = this.el.querySelector("label");
        input.id = `${this.hostId}-${this.index}`;
        label.htmlFor = `${this.hostId}-${this.index}`;
        input.value = this.value.toString();
        label.onclick = () => {
            if (this.clickHandler) {
                this.clickHandler(this.value);
            }
        };
        if (this.checked)
            input.checked = true;
        if (this.disabled)
            this.el.querySelector("input").disabled = true;
    }
    renderContent() { }
}
