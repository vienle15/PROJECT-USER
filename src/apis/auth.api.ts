import { AxiosError } from "axios";
import { LoginForm, RegisterForm } from "../types/form.type";
import { axiosIntance } from "./config.api";

export const loginAPI = async (user: LoginForm) => {
  try {
    const response = await axiosIntance.post("auth/login", user);
    const token = response.headers["authorization"];
    localStorage.setItem("token", JSON.stringify(token));
    return {
      token: token,
      data: response.data,
    };
  } catch (error) {
    const errorAPI = error as AxiosError;
    throw errorAPI.response?.data;
  }
};
