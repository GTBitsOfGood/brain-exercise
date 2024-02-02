import axios, { AxiosResponse } from "axios";
import { getAuth } from "firebase/auth";
import { InternalRequestData, InternalResponseData } from "./types";
// import firebaseInit from "./firebase/config";

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
        /** PersonalInfo POST doesn't work with mode: "cors"  */
        // mode: "cors",
        Auth: idToken,
        accesstoken: idToken,
      },
      data: method.toLowerCase() !== "get" ? newBody : undefined,
    });

    if (response.data.success === false) {
      console.log(response.data);
      throw new Error(`Unable to connect to API: ${response.data.message}`);
    }
    return response.data.payload;
  } catch (e) {
    console.log(e);
    throw new Error(`Unable to connect to API: ${e}`);
  }
}
