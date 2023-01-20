import { Component } from "../../models/component-base.js";
import { Detail } from "../../models/detail.js";
import { detailState } from "../../state/detail-state.js";

export class FormHeader extends Component<HTMLDivElement, HTMLDivElement> {
  private detail: Detail;

  constructor() {
    super("form_header", "form", true, "form-header");
    this.detail = detailState.getDetails();
    this.configure();
    this.renderContent();
  }

  configure() {}

  renderContent() {
    this.el.querySelector(
      "span"
    )!.textContent = `${this.detail.lesson_name}の評価を投稿`;
  }
}
