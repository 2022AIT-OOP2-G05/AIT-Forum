import { Component } from "../../models/component-base.js";

export class Header extends Component<HTMLDivElement, HTMLElement> {
  constructor() {
    super("main-header", "app", true);
    this.configure();
    this.renderContent();
  }

  configure() {}

  renderContent() {
    const title = this.el.querySelector("h1")!;
    title.textContent = "科目一覧";
  }
}
