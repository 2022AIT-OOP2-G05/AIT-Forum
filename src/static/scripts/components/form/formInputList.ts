import { changeToJapanese } from "../../libs/changeToJapanese.js";
import { Component } from "../../models/component-base.js";
import { Star } from "../mainPage/star.js";
import { formState } from "./formState.js";
import { SelectBtn } from "./select-btn.js";

export class FormInputList extends Component<HTMLDivElement, HTMLDivElement> {
  private starValue = 0;
  constructor(
    private parent_id: string,
    private input_key: string,
    renderStart: boolean
  ) {
    super("form-input-list", "main-form", true, "");
    this.renderContent();
    this.configure();
    renderStart ? this.renderStar() : this.renderSelectBtn();
  }

  private starClickHandler(value: number) {
    this.starValue = value;
    formState.setFormState({
      ...formState.getFormState(),
      [this.input_key]: value,
    });
    this.clearStarDom();
    this.renderStar();
  }

  private clearStarDom() {
    const starBox = this.el.querySelector(".input-box")!;
    while (starBox.firstChild) {
      starBox.removeChild(starBox.firstChild);
    }
  }

  configure() {
    this.el.querySelector(".input-box")!.id = `input-${this.parent_id}`;
  }

  renderContent() {
    this.el.querySelector("p")!.textContent = changeToJapanese(this.input_key);
  }

  renderStar() {
    Array.from({ length: 5 }).forEach((_, i) => {
      new Star(
        `input-${this.parent_id}`,
        this.starValue - 1 >= i,
        false,
        i,
        i + 1,
        this.starClickHandler.bind(this)
      );
    });
  }

  renderSelectBtn() {
    new SelectBtn(`input-${this.parent_id}`, this.input_key);
  }
}
