import { Fetch } from "../libs/fetch.js";
import { Component } from "../models/component-base.js";

export class Tab extends Component<HTMLUListElement, HTMLUListElement> {
  constructor(private name: "first" | "last") {
    super("tab__item", "tab-list", false, `${name}-tab`);
    this.configure();
    this.renderContent();
  }

  configure() {
    this.el.addEventListener("click", this.clickHandler);
  }

  renderContent() {
    const children = this.el.querySelector("span")!;
    children.textContent = this.name === "first" ? "前期" : "後期";
  }

  private clickHandler = () => {};
}
