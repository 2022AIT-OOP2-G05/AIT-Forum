import { Fetch } from "../libs/fetch.js";
import { State } from "../models/state.js";
import { Detail } from "../models/detail.js";
class DetailState extends State {
    constructor() {
        super();
        this.detail = {};
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new DetailState();
        return this.instance;
    }
    async fetchDetails() {
        const pathname = location.pathname;
        const detail = await Fetch.get(`detail/${pathname}`);
        this.cleanDetail();
        this.detail = new Detail(detail.lesson_name, detail.teacher_name, detail.day_of_week, detail.time, detail.number_of_credits, detail.level, detail.hit_level, detail.teacher_review, detail.attendance, detail.adequacy, detail.test_level, detail.task_level, detail.middle_test_level, detail.carry, detail.total);
        this.updateListeners();
    }
    cleanDetail() {
        this.detail = {};
    }
    getDetails() {
        return { ...this.detail };
    }
    updateListeners() {
        if (!this.detail)
            return;
        for (const listenerFn of this.listeners) {
            listenerFn([{ ...this.detail }]);
        }
    }
}
export const detailState = DetailState.getInstance();
