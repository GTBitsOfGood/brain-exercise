import "dotenv/config";

module.exports = ({ config }) => (
  {
    ...config,
    slug: "brain-exercise",
    scheme: "myscheme",
    extra: {
      AXIOS_BASEURL: process.env.AXIOS_BASEURL,
      /**
       * Do not comment out the projectId. If you are facing an error because of this line, you are probably not signed in to our BoG Expo account
       * 
       */
      eas: {
        projectId: "ca2c4db8-1c32-43e8-98b4-c6a3ad5f5daf",
      },
    },
  }
)