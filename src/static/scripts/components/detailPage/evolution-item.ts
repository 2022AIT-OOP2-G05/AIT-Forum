import { Component } from "../../models/component-base.js";
import { Star } from "../mainPage/star.js";
import { Progress } from "./progress.js";

export class EvolutionItem extends Component<HTMLUListElement, HTMLLIElement> {
  constructor(
    private text: string,
    private value: number,
    private isStar: boolean
  ) {
    super("evolution-item", "evolution-list__inner", false);
    this.configure();
    this.renderContent();
    isStar ? this.renderStar() : this.renderProgress();
  }

  private changeToJapanese(text: string) {
    switch (text) {
      case "level":
        return "難易度";
      case "hit_level":
        return "当てられる度";
      case "carry":
        return "持ち込み可";
      case "teacher_review":
        return "教授の評価";
      case "adequacy":
        return "充実度";
      case "test_level":
        return "期末テストの難易度";
      case "task_level":
        return "課題の難易度";
      case "middle_test_level":
        return "中間テストの難易度";
      default:
        return "";
    }
  }

  configure() {}

  renderContent() {
    console.log(this.value);
    this.el.querySelector("p")!.textContent = this.changeToJapanese(this.text);
    this.el.querySelector("div")!.id = `${this.isStar ? "star" : "progress"}-${
      this.text
    }`;
  }

  renderStar() {
    Array.from({ length: 5 }).forEach((_, i) => {
      new Star(`star-${this.text}`, i < this.value, true);
    });
  }

  renderProgress() {
    new Progress(`progress-${this.text}`, this.value);
  }
}
