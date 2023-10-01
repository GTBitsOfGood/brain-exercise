import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";
import { getAuth } from "firebase/auth";
import { InternalRequestData, InternalResponseData } from "./types";

export async function internalRequest<T>({
  url,
  queryParams,
  method,
}: InternalRequestData): Promise<T> {
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
  console.log("Internal request responded: ", response.data.payload);
  if (response.data.success === false) {
    console.error("errrr")
    throw new Error(`Unable to connect to API: ${  response.data.message}`);
  }
  return response.data.payload;
}
