import { Component } from "../../models/component-base.js";

export class SubmitBtn extends Component<HTMLFormElement, HTMLButtonElement> {
  constructor() {
    super("submit-btn", "main-form", false, "submit-btn");
  }

  configure() {}

  renderContent() {}
}
