/* eslint-disable no-console */

export const logMessage = (...args: unknown[]) => {
  console.log(...args);
};

export const logWarning = (...args: unknown[]) => {
  console.warn(...args);
};

export const logError = (...args: unknown[]) => {
  console.error(...args);
};
