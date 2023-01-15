import { Component } from "../../models/component-base.js";

export class Star extends Component<HTMLDivElement, HTMLInputElement> {
  constructor(
    hostId: string,
    private checked: boolean,
    private disabled: boolean
  ) {
    super("star", hostId, false, "");
    this.configure();
    this.renderContent();
  }

  configure() {
    if (this.checked) this.el.checked = true;
    if (this.disabled) this.el.disabled = true;
  }

  renderContent() {}
}
