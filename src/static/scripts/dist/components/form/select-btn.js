import { Component } from "../../models/component-base.js";
import { formState } from "./formState.js";
export class SelectBtn extends Component {
    constructor(hostId, input_key) {
        super("select-btn", hostId, false, "");
        this.hostId = hostId;
        this.input_key = input_key;
        this.renderContent();
        this.configure();
    }
    clickHandler(target) {
        formState.setFormState({
            ...formState.getFormState(),
            [this.input_key]: target.value === "true",
        });
    }
    configure() {
        this.el.querySelectorAll("input").forEach((input, i) => {
            input.name = this.hostId;
            input.id = `${this.hostId}-${i}`;
            input.value = i === 0 ? "true" : "false";
            input.checked = i === 1;
            input.addEventListener("click", (e) => {
                this.clickHandler(e.target);
            });
        });
        this.el.querySelectorAll("label").forEach((label, i) => {
            label.htmlFor = `${this.hostId}-${i}`;
        });
        this.el.querySelectorAll("input").forEach((input) => {
            input.addEventListener("click", (e) => {
                const target = e.target;
            });
        });
    }
    renderContent() { }
}
