import { loginAPI } from "../apis/auth.api";
import { LoginForm } from "../types/form.type";

export const loginService = async (user: LoginForm) => {
  try {
    const ret = await loginAPI(user);
    console.log(ret);

    return ret.data;
  } catch (error) {
    throw error;
  }
};
