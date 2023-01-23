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
    console.log(this.value);
    this.el.querySelector("progress")!.value = Math.floor(this.value);
    this.el.querySelector(
      ".progress_BG-top-left"
    )!.innerHTML = `yes - ${this.value}%`;
    this.el.querySelector(".progress_BG-top-right")!.innerHTML = `no - ${
      100 - this.value
    }%`;
  }
}
