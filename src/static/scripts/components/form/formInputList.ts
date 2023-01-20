import { Component } from "../../models/component-base.js";
import { Star } from "../mainPage/star.js";

export class FormInputList extends Component<HTMLDivElement, HTMLDivElement> {
  constructor(private star_id: string) {
    super("form-input-list", "main-form", false, "");
    this.renderContent();
    this.configure();
    this.renderStar();
  }

  configure() {
    this.el.querySelector(".star-box")!.id = `input-${this.star_id}`;
  }

  renderContent() {}

  renderStar() {
    console.log(this.star_id);
    Array.from({ length: 5 }).forEach((_, i) => {
      new Star(`input-${this.star_id}`, false, false, i, i + 1);
    });
  }
}