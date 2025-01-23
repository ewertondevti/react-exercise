import { GetCreditResponse } from "../models/api";

export const getCreditLimits = async () => {
  const res = await fetch("http://localhost:3001/limits", { method: "GET" });
  const data: GetCreditResponse = await res.json();

  return data;
};
