import { Component } from "../../models/component-base.js";
import { subjectState } from "../../state/subject-state.js";

export class Tab extends Component<HTMLUListElement, HTMLLIElement> {
  private parentNode: HTMLUListElement;
  constructor(private name: "first" | "last") {
    super("tab__item", "tab-list", false, `${name}-tab`);
    this.parentNode = document.querySelector("#tab-list")!;
    this.configure();
    this.renderContent();
  }

  configure() {
    this.el.addEventListener("click", this.clickHandler);
  }

  renderContent() {
    const children = this.el.querySelector("span")!;
    children.textContent = this.name === "first" ? "εζ" : "εΎζ";
    this.name === "last"
      ? this.el.classList.add("main-content-nav-content-content-off")
      : "";
  }

  private clickHandler = () => {
    subjectState.fetchSubjects(this.name);
    this.parentNode.querySelectorAll("li").forEach((li) => {
      li !== this.el
        ? li.classList.add("main-content-nav-content-content-off")
        : li.classList.remove("main-content-nav-content-content-off");
    });
  };
}
