import { api } from "./axiosCilent";

export async function login(credentials) {
  return await api.post("auth/login", credentials);
  // try {
  // } catch (error) {
  //   console.log(error.response.data);
  // }
}
export function logout() {
  localStorage.removeItem("mandapalli_token");
}
