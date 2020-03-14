import { url } from './baseURL'
export const Fetch = async (method = "POST", path, data = {}) => {
    try {
      const URL = url + path;
      const res = await fetch(URL, {
        "headers": {
          "Content-Type": "application/json",
        //   "Authorization": `Bearer ${token}`,
          "Accept": "*/*",
        },
        method: method || "POST",
        body: (method === "POST" ? JSON.stringify(data) : null)
      });
      const datas = await res.json();
      return datas;
    } catch (err) {
      return err;
    }
  }