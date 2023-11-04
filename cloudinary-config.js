// import { config } from "cloudinary-react";

// config({
//   cloudName: "dindon",
//   apiKey: "517767964973866",
//   apiSecret: "kZwW7WJSawyv1-Ifts0TViwfzxg",
// });

import cloudinary from "cloudinary-core";

const cloudinaryInstance = new cloudinary.Cloudinary({
  cloudName: "dindon",
  apiKey: "517767964973866",
  apiSecret: "kZwW7WJSawyv1-Ifts0TViwfzxg",
});

export default cloudinaryInstance;
