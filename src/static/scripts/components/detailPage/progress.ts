import { Component } from "../../models/component-base.js";

export class Progress extends Component<HTMLDivElement, HTMLProgressElement> {
  constructor(id: string, private value: number) {
    super("progress", id, false);
    this.configure();
    this.renderContent();
  }

  configure() {
    this.el.value = this.value;
  }

  renderContent() {
    // this.el.textContent = `${this.value}%`;
  }
}
