import { Component } from "../../models/component-base.js";

export class BackBtn extends Component<HTMLDivElement, HTMLParagraphElement> {
  constructor() {
    super("back-btn", "app", true);
    this.renderContent();
  }

  configure() {}

  renderContent() {
    const link = this.el.querySelector("a")!;
    link.innerHTML = link.innerHTML + "戻る";
  }
}
