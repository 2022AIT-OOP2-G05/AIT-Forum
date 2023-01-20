import { changeToJapanese } from "../../libs/changeToJapanese.js";
import { Component } from "../../models/component-base.js";
import { Star } from "../mainPage/star.js";
import { Progress } from "./progress.js";
export class EvolutionItem extends Component {
    constructor(text, value, isStar) {
        super("evolution-item", "evolution-list__inner", false);
        this.text = text;
        this.value = value;
        this.isStar = isStar;
        this.configure();
        this.renderContent();
        isStar ? this.renderStar() : this.renderProgress();
    }
    configure() { }
    renderContent() {
        this.el.querySelector("p").textContent = changeToJapanese(this.text);
        this.el.querySelector("div").id = `${this.isStar ? "star" : "progress"}-${this.text}`;
    }
    renderStar() {
        Array.from({ length: 5 }).forEach((_, i) => {
            new Star(`star-${this.text}`, i < this.value, true, i);
        });
    }
    renderProgress() {
        new Progress(`progress-${this.text}`, this.value);
    }
}
