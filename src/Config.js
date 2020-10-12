
const dev = {
    s3: {
      REGION: "us-east-2",
      BUCKET: "note-app-uploads-zack"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://pvimljecqi.execute-api.us-east-2.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_TiGzzyx9Y",
      APP_CLIENT_ID: "aup34sav1tv148c9t2bd05vg",
      IDENTITY_POOL_ID: "us-east-2:a790f8a2-993b-437b-bbfa-a4070fd852a5"
    }
  };
  const prod = {
    //  to be changed to prod config
    s3: {
      REGION: "us-east-2",
      BUCKET: "note-app-uploads-zack"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://pvimljecqi.execute-api.us-east-2.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_TiGzzyx9Y",
      APP_CLIENT_ID: "aup34sav1tv148c9t2bd05vg",
      IDENTITY_POOL_ID: "us-east-2:a790f8a2-993b-437b-bbfa-a4070fd852a5"
    }
  };
const config = process.env.REACT_APP_STAGE === 'prod'
? prod
: dev;
export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  };
