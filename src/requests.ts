import axios, { AxiosResponse } from "axios";
import { getAuth } from "firebase/auth";
import { InternalRequestData, InternalResponseData } from "./types";

export async function internalRequest<T>({
  url,
  queryParams,
  method,
}: InternalRequestData): Promise<T> {
  try {
    const idToken: string = await getAuth().currentUser.getIdToken();
    const response: AxiosResponse<InternalResponseData<object>> = await axios({
      method,
      url,
      params: {
        ...queryParams,
        idToken,
      },
      headers: {
        withCredentials: true,
        mode: "cors",
      },
    });
    // const responseBody = (await response.json()) as InternalResponseData<T>;
    if (response.data.success === false) {
      throw new Error(`Unable to connect to API: ${response.data.message}`);
    }
    return response.data.payload;
  } catch (e) {
    throw new Error(`Unable to connect to API: ${e}`);
  }
}
