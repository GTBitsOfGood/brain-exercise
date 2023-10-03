import axios, { AxiosResponse } from "axios";
import { getAuth } from "firebase/auth";
import { InternalRequestData, InternalResponseData } from "./types";

export async function internalRequest<T>({
  url,
  queryParams,
  method,
  body,
  authRequired = true,
}: InternalRequestData): Promise<T> {
  try {
    const idToken: string = await getAuth().currentUser.getIdToken();
    let newParams = queryParams;
    let newBody = body;
    if (authRequired) {
      const { email } = getAuth().currentUser;
      newParams = {
        ...queryParams,
        email,
      };
      newBody = {
        ...body,
        email,
      };
    }

    const response: AxiosResponse<InternalResponseData<T>> = await axios({
      method,
      url,
      params: newParams,
      headers: {
        withCredentials: true,
        mode: "cors",
        accesstoken: idToken,
      },
      data: newBody,
    });
    if (response.data.success === false) {
      throw new Error(`Unable to connect to API: ${response.data.message}`);
    }
    return response.data.payload;
  } catch (e) {
    throw new Error(`Unable to connect to API: ${e}`);
  }
}
