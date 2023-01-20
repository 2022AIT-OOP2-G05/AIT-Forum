import { Fetch } from "../../libs/fetch.js";
import { Component } from "../../models/component-base.js";
import { Detail } from "../../models/detail.js";
import { detailState } from "../../state/detail-state.js";
import { initializeFormInput } from "../../types/inputType.js";

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
      number_of_credits: this.detail.number_of_credits,
    });
  }

  inputFormProcessing() {
    const {
      lesson_name,
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

  private formValidation() {
    const inputs: InputField = formState.getFormState();
    for (const key in inputs) {
      if (inputs[key] === 0 || inputs[key] === "") {
        return false;
      }
    }
    return true;
  }

  private submitHandler(event: Event) {
    event.preventDefault();
    if (!this.formValidation()) {
      console.log("入力されていない項目があります");
    } else {
      Fetch.post(`detail/${location.pathname}`, formState.getFormState());
    }
  }

  private renderList() {
    for (const key in this.inputField) {
      const isStar = key !== "hit_level" && key !== "carry";
      new FormInputList(isStar ? `star-${key}` : `select-${key}`, key, isStar);
    }
  }
}
