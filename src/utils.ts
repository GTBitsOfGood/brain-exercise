/* eslint-disable no-console */
import axios, { AxiosError } from "axios";
import { TimeAnalyticsTypes } from "./types";

// From https://github.com/axios/axios#handling-errors, which is by Matt Zabriskie and is under the MIT license
export function logAxiosError(error: AxiosError) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log("error.response.data");
    console.log(error.response.data);
    console.log("error.response.status");
    console.log(error.response.status);
    console.log("error.response.headers");
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log("error.request");
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("Error", error.message);
  }
  console.log("error.config");
  console.log(error.config);
  console.log("");
}

export const wait = (timeout: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });

export async function reportTimeAnalytics(
  startTime: Date,
  timeType: TimeAnalyticsTypes,
) {
  const deltaTime = (Date.now() - startTime.getTime()) / 1000;
  await axios
    .post(`/analytics/screen-times`, {
      type: timeType,
      time: deltaTime,
    })
    .catch((err) => console.log(err));
}
