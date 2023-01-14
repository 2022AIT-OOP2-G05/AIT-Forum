import { Fetch } from "../libs/fetch.js";
import { State } from "../models/state.js";
import { Subject } from "../models/subject.js";
export class SubjectState extends State {
    constructor() {
        super();
        this.subjects = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new SubjectState();
        return this.instance;
    }
    async fetchSubjects(path) {
        const subjects = await Fetch.get(path);
        this.clearSubjects();
        this.subjects = subjects.map((subject) => {
            return new Subject(subject.lesson_name, subject.teacher_name, subject.day_of_week, subject.time, subject.number_of_credits);
        });
        this.updateListeners();
    }
    getSubjects() {
        return this.subjects.slice();
    }
    clearSubjects() {
        this.subjects = [];
    }
    updateListeners() {
        for (const listenerFn of this.listeners) {
            listenerFn(this.subjects.slice());
        }
    }
}
export const subjectState = SubjectState.getInstance();
