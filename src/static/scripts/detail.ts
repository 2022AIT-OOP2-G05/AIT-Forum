import { BackBtn } from "./components/detailPage/back-btn.js";
import { EvolutionList } from "./components/detailPage/evaluation-list.js";
import { Header } from "./components/detailPage/header.js";
import { Total } from "./components/detailPage/total.js";
import { Toast } from "./components/toast.js";
import { FormMain } from "./form.js";
import { detailState } from "./state/detail-state.js";

class Main {
  constructor() {
    this.init();
  }

  private async init() {
    await detailState.fetchDetails();
    new BackBtn();
    new Header();
    new Total();
    new EvolutionList();
    this.initForm();
  }

  private initForm() {
    new FormMain();
  }
}
export const toast = new Toast();

new Main();
