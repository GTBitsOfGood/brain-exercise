import "dotenv/config";

module.exports = ({ config }) => {
  return {
    ...config,
    slug: "brain-exercise",
    scheme: "myscheme",
    extra: {
      AXIOS_BASEURL: process.env.AXIOS_BASEURL,
    },
  };
};
