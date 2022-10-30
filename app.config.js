import 'dotenv/config';

module.exports = ({ config }) => {
    return {
      ...config,
      extra: {
        AXIOS_BASEURL: process.env.AXIOS_BASEURL
      }
    };
  };