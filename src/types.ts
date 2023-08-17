export type User = {
  _id?: string, // the unqiue id assigned to a user. Let Mongo create this when you insert a document without any _id attribute
  name: string,
  phoneNumber: number,
  birthdate: string,
  auth0AccessToken: string
};

export type decodedJwtToken = {
  given_name: string,
  family_name: string,
  nickname: string,
  name: string,
  sub: string,
}

export type TimeAnalyticsTypes = "totalScreenTime" | "writingTime" | "mathTime" | "readingTime";