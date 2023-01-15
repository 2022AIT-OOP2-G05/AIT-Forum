import { Component } from "../../models/component-base.js";
import { Detail } from "../../models/detail.js";
import { detailState } from "../../state/detail-state.js";
import { Star } from "../mainPage/star.js";

export class Total extends Component<HTMLDivElement, HTMLElement> {
  private detail: Detail;
  constructor() {
    super("total", "app", false);
    this.detail = detailState.getDetails();
    this.configure();
    this.renderContent();
    this.renderStart();
  }

  configure() {}

  renderContent() {
    this.el.querySelector("span")!.textContent = "総合評価";
  }

  renderStart() {
    Array.from({ length: 5 }).forEach((_, i) => {
      new Star("star-box", this.detail.total - 1 >= i, true, i);
    });
  }
}
