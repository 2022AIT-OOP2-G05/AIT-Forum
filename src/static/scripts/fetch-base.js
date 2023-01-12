class fetchBase {
  constructor() {}

  async fetch(method, subject_name, body) {
    const data = JSON.stringify(body);
    try {
      const res = await fetch(`api/detail/${subject_name}`, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });

      const jsonData = await res.json();

      return jsonData;
    } catch (error) {
      console.log(error.message);
    }
  }
}

export const fetchData = new fetchBase().fetch;
