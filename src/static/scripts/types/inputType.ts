export type FormInput = {
  lesson_name: string;
  teacher_name: string;
  day_of_week: string;
  time: number;
  number_of_credits: number;
  attendance: boolean;
  level: number;
  hit_level: boolean;
  teacher_review: number;
  adequacy: number;
  test_level: number;
  task_level: number;
  middle_test_level: number;
  carry: boolean;
  total: number;
};

export const initializeFormInput: FormInput = {
  lesson_name: "",
  teacher_name: "",
  day_of_week: "",
  time: 0,
  number_of_credits: 0,
  attendance: false,
  level: 0,
  hit_level: false,
  teacher_review: 0,
  adequacy: 0,
  test_level: 0,
  task_level: 0,
  middle_test_level: 0,
  carry: false,
  total: 0,
};
