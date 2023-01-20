export const changeToJapanese = (text: string) => {
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
};
