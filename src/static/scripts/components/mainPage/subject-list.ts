import { Component } from "../../models/component-base.js";
import { Subject } from "../../models/subject.js";
import { subjectState } from "../../state/subject-state.js";
import { SubjectItem } from "./subject-item.js";

export class SubjectList extends Component<HTMLDListElement, HTMLElement> {
  assignedSubjects: Subject[] = [];

  constructor() {
    super("subject-list", "main__inner", false, "");
    this.configure();
    this.renderContent();
  }

  configure() {
    subjectState.addListener((subjects: Subject[]) => {
      this.clearContent();
      this.assignedSubjects = subjects;
      this.renderSubjects();
    });
    if (!subjectState.getSubjects().length) {
      subjectState.fetchSubjects("first");
    }
  }

  private clearContent() {
    const list = this.el.querySelector("ul")!;
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }

  renderContent() {}

  private renderSubjects() {
    this.assignedSubjects.forEach((subject) => new SubjectItem(subject));
  }
}
