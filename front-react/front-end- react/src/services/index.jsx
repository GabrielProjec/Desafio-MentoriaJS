import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8800",
  timeout: 5000,
});

export async function postUser(payload) {
  try {
    const response = await api.post("/cadastro", payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUser(payload) {
  try {
    const response = await api.get("/", payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
