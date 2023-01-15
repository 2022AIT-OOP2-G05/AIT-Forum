import { Component } from "../../models/component-base.js";
import { detailState } from "../../state/detail-state.js";
export class Header extends Component {
    constructor() {
        super("header", "app", false);
        this.detail = detailState.getDetails();
        this.configure();
        this.renderContent();
    }
    configure() {
        detailState.addListener((detail) => {
            this.detail = detail[0];
            this.renderContent();
        });
    }
    renderContent() {
        const paragraphs = this.el.querySelectorAll("p");
        paragraphs[0].textContent = `教授の名前:${this.detail.teacher_name}`;
        paragraphs[1].textContent = `曜日:${this.detail.day_of_week}`;
        paragraphs[2].textContent = `時間:${this.detail.time.toString()}`;
        paragraphs[3].textContent = `単位数:${this.detail.number_of_credits.toString()}単位`;
        this.el.querySelector("h2").textContent = this.detail.lesson_name;
    }
}
