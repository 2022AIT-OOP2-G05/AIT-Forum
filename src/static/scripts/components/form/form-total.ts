import { Component } from "../../models/component-base.js";
import { Star } from "../mainPage/star.js";
import { formState } from "./formState.js";

export class Total extends Component<HTMLDivElement, HTMLElement> {
  private starValue = 0;
  constructor() {
    super("total", "main-form", false);
    this.configure();
    this.renderContent();
    this.renderStar();
  }

  private starClickHandler(value: number) {
    this.starValue = value;
    formState.setFormState({
      ...formState.getFormState(),
      total: value,
    });
    this.clearStarDom();
    this.renderStar();
  }

  private clearStarDom() {
    const starBox = this.el.querySelector("#total-box")!;
    while (starBox.firstChild) {
      starBox.removeChild(starBox.firstChild);
    }
  }

  configure() {
    this.el.classList.add("total-wrapper");
    this.el.querySelector(".total-star_BG")!.id = "total-box";
    this.el
      .querySelector(".total-bottom-border")!
      .classList.add("total-top-border");
  }

  renderContent() {
    this.el.querySelector("span")!.textContent = "総合評価";
  }

  private renderStar() {
    Array.from({ length: 5 }).forEach((_, i) => {
      new Star(
        "total-box",
        this.starValue - 1 >= i,
        false,
        i,
        i + 1,
        this.starClickHandler.bind(this)
      );
    });
  }
}
