import { Component } from "../../models/component-base.js";

export class Star extends Component<HTMLDivElement, HTMLDivElement> {
  private hostId = "";
  constructor(
    hostId: string,
    private checked: boolean,
    private disabled: boolean,
    private index: number
  ) {
    super("star", hostId, false, "");
    this.hostId = hostId;
    this.configure();
    this.renderContent();
  }

  configure() {
    const input = this.el.querySelector("input")!;
    const label = this.el.querySelector("label")!;
    input.id = `${this.hostId}-${this.index}`;
    label.htmlFor = `${this.hostId}-${this.index}`;

    if (this.checked) input.checked = true;
    if (this.disabled) this.el.querySelector("input")!.disabled = true;
  }

  renderContent() {}
}
