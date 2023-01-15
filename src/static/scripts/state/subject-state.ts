import { Fetch } from "../libs/fetch.js";
import { Subject } from "../models/subject.js";

type Listener<T> = (items: T[]) => void;

class State<T> {
  protected listeners: Listener<T>[] = [];

  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

export class SubjectState extends State<Subject> {
  private subjects: Subject[] = [];
  private static instance: SubjectState;

  private constructor() {
    super();
  }

  static getInstance(): SubjectState {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new SubjectState();
    return this.instance;
  }

  async fetchSubjects(path: string) {
    const subjects = await Fetch.get(path);
    this.clearSubjects();

    this.subjects = subjects.map((subject: any) => {
      return new Subject(
        subject.lesson_name,
        subject.teacher_name,
        subject.day_of_week,
        subject.time,
        subject.number_of_credits
      );
    });

    this.updateListeners();
  }

  getSubjects() {
    return this.subjects.slice();
  }

  private clearSubjects() {
    this.subjects = [];
  }

  private updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.subjects.slice());
    }
  }
}

export const subjectState = SubjectState.getInstance();
