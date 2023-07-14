import { api } from "./axiosCilent";
export async function saveTransactionId(body) {
  try {
    return await api.post("/payment/save", { ...body });
  } catch (error) {
    console.log(error);
  }
}
export async function getPayments(params) {
  // console.log(data);
  return await api.get("/payment/payments", { params });
  // try {
  // } catch (error) {
  //   console.log(error);
  // }
}
