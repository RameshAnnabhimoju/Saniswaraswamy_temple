import { api } from "../axiosCilent";
export async function saveTransactionId(body) {
  return await api.post("/payment/save", body);
}
