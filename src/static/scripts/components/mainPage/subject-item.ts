import { Component } from "../../models/component-base.js";
import { Subject } from "../../models/subject.js";
import { Star } from "./star.js";

export class SubjectItem extends Component<HTMLUListElement, HTMLUListElement> {
  private subject: Subject;
  constructor({
    lesson_name,
    teacher_name,
    day_of_week,
    time,
    number_of_credits,
  }: Subject) {
    super("subject-list-item", "subject-list__inner", false, "");
    this.subject = {
      lesson_name,
      teacher_name,
      day_of_week,
      time,
      number_of_credits,
    };
    this.configure();
    this.renderContent();
    this.renderStars();
  }

  configure() {
    const link = this.el.querySelector("a")!;
    link.href = `/${this.subject.lesson_name}}`;
    const starBox = this.el.querySelector(".star-box")!;
    starBox.id = `star-box-${this.subject.lesson_name}`;
  }

  renderContent() {
    const paragraph = this.el.querySelectorAll("p");
    this.el.querySelector("h2")!.textContent = this.subject.lesson_name;
    paragraph[0].textContent = `お名前: ${this.subject.teacher_name}`;
    paragraph[1].textContent = `${this.subject.day_of_week}曜日`;
    paragraph[2].textContent = `${this.subject.time}時限目`;
  }

  renderStars() {
    for (let i = 0; i < 5; i++) {
      new Star(
        this.subject.number_of_credits - 1 === i,
        `star-box-${this.subject.lesson_name}`
      );
    }
  }
}