import { api } from "./axiosCilent";

export async function createOrder(body) {
  return await api.post("/payment/createOrder", body);
}
export async function capturePayment(body) {
  await api
    .post("/payment/capturePayment", body)
    .then((response) => {
      return console.log(response);
    })
    .catch((error) => {
      return console.log(error);
    });
}
