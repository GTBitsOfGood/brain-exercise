import { getAuth } from "firebase/auth";
import { InternalRequestData, InternalResponseData } from "./types";

export async function internalRequest<T>({
  url,
  queryParams,
  method,
  body,
  authRequired,
}: InternalRequestData): Promise<T> {
  const auth = getAuth();
  const requestInfo: RequestInit = {
    method,
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      accesstoken: authRequired
        ? ((await auth.currentUser?.getIdToken()) as string)
        : "",
    },
  };

  if (body) {
    requestInfo.body = JSON.stringify(body);
  }
  if (queryParams) {
    Object.entries(queryParams)
      .filter(([, value]) => value !== undefined && value !== null)
      .map(([key, value]) => {
        url = `${url}?${key}=${(
          value as string | number | boolean
        ).toString()}&`;
      });
  }
  const response = await fetch(url, requestInfo);
  const responseBody = (await response.json()) as InternalResponseData<T>;

  if (!responseBody) {
    throw new Error("Unable to connect to API.");
  } else if (!responseBody.success) {
    const errorMessage = responseBody.message;
    throw new Error(errorMessage);
  }

  return responseBody.payload as T;
}
