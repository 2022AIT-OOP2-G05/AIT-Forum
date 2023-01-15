import { Component } from "../../models/component-base.js";
import { subjectState } from "../../state/subject-state.js";
import { SubjectItem } from "./subject-item.js";
export class SubjectList extends Component {
    constructor() {
        super("subject-list", "main__inner", false, "");
        this.assignedSubjects = [];
        this.configure();
        this.renderContent();
    }
    configure() {
        subjectState.addListener((subjects) => {
            this.clearContent();
            this.assignedSubjects = subjects;
            this.renderSubjects();
        });
        if (!subjectState.getSubjects().length) {
            subjectState.fetchSubjects("first");
        }
    }
    clearContent() {
        const list = this.el.querySelector("ul");
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    renderContent() { }
    renderSubjects() {
        this.assignedSubjects.forEach((subject) => new SubjectItem(subject));
    }
}
