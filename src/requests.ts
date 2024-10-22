import axios, { AxiosResponse } from "axios";
import { User, getAuth } from "firebase/auth";
import { InternalRequestData, InternalResponseData } from "./types";
import firebaseInit from "./firebase/config";
// import firebaseInit from "./firebase/config";

export async function internalRequest<T>({
  url,
  queryParams,
  method,
  body,
  authRequired = true,
}: InternalRequestData): Promise<T> {
  try {
    let idToken: string | undefined;
    let newParams = queryParams;
    let newBody = body;
    if (authRequired) {
      firebaseInit();
      const auth = getAuth();

      const currentUser: User = await new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          unsubscribe();
          if (user) {
            resolve(user);
          } else {
            reject(new Error("Unable to get user"));
          }
        }, reject);
      });

      idToken = await currentUser.getIdToken();
      const { email } = currentUser;
      if (email === null) {
        throw new Error("Email does not exist on user");
      }
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
      // console.log("Error1:", response.data.message);
      throw new Error(`Unable to connect to API: ${response.data.message}`);
    }
    return response.data.payload;
  } catch (e) {
    // console.log("Error2:", e);
    throw new Error(`Unable to connect to API: ${e}`);
  }
}
