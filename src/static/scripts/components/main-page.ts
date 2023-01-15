import { Component } from "../models/component-base.js";

export class MainPage extends Component<HTMLDivElement, HTMLElement> {
  constructor() {
    super("main-page", "app", false, "user-input");
    this.configure();
    this.renderContent();
  }

  configure() {}

  renderContent() {}
}
