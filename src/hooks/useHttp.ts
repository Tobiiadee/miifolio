/** @format */

import { useCallback, useReducer } from "react";

export type DataType = {
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
} | null;

type ErrorType = "something went wrong..." | null;

interface HttpState {
  status: "pending" | "complete" | "error";
  isFetching: boolean;
  data: DataType;
  error: ErrorType;
}

type HttpAction = {
  type: "PENDING" | "SUCCESS" | "ERROR";
  data: DataType;
  error: ErrorType;
};

type Reducer<State, Action> = (state: State, action: Action) => State;

const intialState: HttpState = {
  status: "pending",
  isFetching: false,
  data: null,
  error: null,
};

const httpReducer: Reducer<HttpState, HttpAction> = (
  state: HttpState,
  action: HttpAction
): HttpState => {
  switch (action.type) {
    case "PENDING":
      return {
        ...state,
        isFetching: true,
      };

    case "ERROR":
      return {
        status: "error",
        isFetching: false,
        data: null,
        error: "something went wrong...",
      };

    case "SUCCESS":
      return {
        status: "complete",
        isFetching: false,
        data: action.data,
        error: null,
      };

    default:
      return state;
  }
};

const useHttp = (rqFn: (rqURL: string) => DataType) => {
  const [httpState, httpDispatch] = useReducer(httpReducer, intialState);

  const sendRequest = useCallback(
    async (rqURL: string) => {
      httpDispatch({ type: "PENDING", data: null, error: null });
      const response = await rqFn(rqURL);
      httpDispatch({ type: "SUCCESS", data: response, error: null });
      if (!response) {
        httpDispatch({ type: "ERROR", data: null, error: "something went wrong..." });
      }
    },
    [rqFn]
  );

  return { sendRequest, ...httpState };
};

export default useHttp;
