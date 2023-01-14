export class Detail {
  constructor(
    public lesson_name: string,
    public teacher_name: string,
    public day_of_week: string,
    public time: number,
    public number_of_credits: number,
    public level: number,
    public hit_level: number,
    public teacher_review: number,
    public adequacy: number,
    public test_level: number,
    public task_level: number,
    public middle_test_level: number,
    public carry: number,
    public total: number
  ) {}
}
