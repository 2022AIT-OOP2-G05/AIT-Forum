import { Component } from "../../models/component-base.js";
import { detailState } from "../../state/detail-state.js";
import { EvolutionItem } from "./evolution-item.js";
export class EvolutionList extends Component {
    constructor() {
        super("evaluation-list", "app", false);
        this.detail = detailState.getDetails();
        this.evolutionItems = this.detailProcessing();
        this.configure();
        this.renderContent();
        this.renderList();
    }
    detailProcessing() {
        const { lesson_name, teacher_name, day_of_week, time, number_of_credits, total, ...showEvolution } = this.detail;
        console.log(showEvolution);
        return showEvolution;
    }
    configure() { }
    renderContent() { }
    renderList() {
        for (const key in this.evolutionItems) {
            new EvolutionItem(key, this.evolutionItems[key], key !== "hit_level" && key !== "carry");
        }
    }
}
