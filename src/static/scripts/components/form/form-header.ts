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

  configure() {
    const modal_wrapper = document.querySelector(".form_BG")!;
    const closeBtn = this.el.querySelector(".F-close_btn")!;
    closeBtn.addEventListener("click", () => {
      const modal = document.querySelector(".form_BG")!;
      modal.classList.remove("visible");
      modal.classList.add("hidden");
    });

    modal_wrapper.addEventListener("click", (e) => {
      if (e.target === modal_wrapper) {
        modal_wrapper.classList.remove("visible");
        modal_wrapper.classList.add("hidden");
      }
    });
  }

  renderContent() {
    this.el.querySelector(
      "span"
    )!.textContent = `${this.detail.lesson_name}の評価を投稿`;
  }
}
