import { AxiosResponse } from "axios";
import { api } from "./base";

export const API = {
  fetchHello: async (): Promise<AxiosResponse<string>> => api.get(""),
};
