import { Fetch } from "../../libs/fetch.js";
import { Component } from "../../models/component-base.js";
import { Detail } from "../../models/detail.js";
import { detailState } from "../../state/detail-state.js";
import { FormInput, initializeFormInput } from "../../types/inputType.js";
import { Star } from "../mainPage/star.js";
import { FormInputList } from "./formInputList.js";
import { formState } from "./formState.js";

type InputField = {
  [key: string]: number | string | boolean;
};

export class Form extends Component<HTMLDialogElement, HTMLFormElement> {
  private detail: Detail;
  private inputField: InputField;

  constructor() {
    super("form_list", "form", false, "main-form");
    this.detail = detailState.getDetails();
    this.inputField = this.inputFormProcessing();
    this.configure();
    this.renderContent();
    this.renderList();
  }
  configure() {
    this.el.addEventListener("submit", this.submitHandler.bind(this));
    formState.setFormState({
      ...formState.getFormState(),
      lesson_name: this.detail.lesson_name,
      teacher_name: this.detail.teacher_name,
      day_of_week: this.detail.day_of_week,
      time: this.detail.time,
    });
  }

  inputFormProcessing() {
    const {
      lesson_name,
      lesson_name_en,
      teacher_name,
      day_of_week,
      time,
      number_of_credits,
      total,
      ...inputField
    } = initializeFormInput;

    return inputField;
  }

  renderContent() {}

  private submitHandler(event: Event) {
    event.preventDefault();
    Fetch.post(`detail/${location.pathname}`, formState.getFormState());
    console.log("submit");
  }

  private renderList() {
    for (const key in this.inputField) {
      new FormInputList(`star-${key}`);
    }
  }
}
