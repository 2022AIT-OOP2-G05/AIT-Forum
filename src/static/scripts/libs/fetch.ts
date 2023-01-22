import { toast } from "../components/toast.js";
import { FormInput } from "../types/inputType";

export class Fetch {
  static async get(url: string) {
    try {
      const response = await fetch(`/api/${url}`);

      return await response.json();
    } catch (error) {
      toast.error({
        message: "予期せぬエラーが発生しました",
      });
    }
  }

  static async post(url: string, data: FormInput) {
    try {
      const response = await fetch(`/api/${url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      return await response.json();
    } catch (error) {
      toast.error({
        message: "予期せぬエラーが発生しました",
      });
      return { error: true };
    }
  }
}
