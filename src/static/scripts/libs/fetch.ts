export class Fetch {
  static async get(url: string) {
    const response = await fetch(`/api/${url}`);
    return await response.json();
  }

  static async post(url: string, data: any) {
    const response = await fetch(`/api/${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await response.json();
  }
}
