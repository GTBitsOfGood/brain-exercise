import "dotenv/config";

module.exports = ({ config }) => (
  {
    ...config,
    slug: "brain-exercise",
    scheme: "myscheme",
    extra: {
      AXIOS_BASEURL: process.env.AXIOS_BASEURL,
      eas: {
        projectId: "ca2c4db8-1c32-43e8-98b4-c6a3ad5f5daf",
      },
    },
  }
)