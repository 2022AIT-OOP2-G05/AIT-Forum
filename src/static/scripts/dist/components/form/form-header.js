import { Component } from "../../models/component-base.js";
import { detailState } from "../../state/detail-state.js";
export class FormHeader extends Component {
    constructor() {
        super("form_header", "form", false, "form-header");
        this.detail = detailState.getDetails();
        this.configure();
        this.renderContent();
    }
    configure() { }
    renderContent() {
        this.el.querySelector("span").textContent = `${this.detail.lesson_name}の評価を投稿`;
    }
}
