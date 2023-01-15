import { Component } from "../../models/component-base.js";

export class Star extends Component<HTMLDivElement, HTMLInputElement> {
  constructor(private checked: boolean, hostId: string) {
    super("star", hostId, false, "");
    this.configure();
    this.renderContent();
  }

  configure() {
    if (this.checked) this.el.checked = true;
  }

  renderContent() {}
}
