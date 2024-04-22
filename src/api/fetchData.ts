/** @format */

import { DataType } from "../hooks/useHttp";

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const signUpEndPoint =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
const fetchURL = `${signUpEndPoint} ${API_KEY}`;

// type ResponseType = {

// }

export async function SignUp(data: DataType) {
  try {
    const response = await fetch(fetchURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const resData = await response.json();
    if (!response) {
      throw new Error("Something went wrong...");
    }
    return resData;
  } catch (error) {
    return error;
  }
}


export async function SignIn(data: DataType) {
  try {
    const response = await fetch(API_KEY, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const resData = await response.json();
    if (!response) {
      throw new Error("Something went wrong...");
    }
    return resData;
  } catch (error) {
    return error;
  }
}


export async function RecieveData() {
  try {
    const response = await fetch(API_KEY);
    const resData = await response.json();

    if (!response) {
      throw new Error("Something went wrong...");
    }
    return resData;
  } catch (error) {
    return error;
  }
}
