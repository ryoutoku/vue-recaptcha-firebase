import * as functions from "firebase-functions";
import * as rp from "request-promise";

export const checkRecaptcha = functions.https.onCall(async (data, context) => {
  const secret = "secret";

  let response = {};
  await rp({
    uri: "https://recaptcha.google.com/recaptcha/api/siteverify",
    method: "POST",
    formData: {
      secret,
      response: data.token,
    },
    json: true,
  })
    .then(async result => {
      console.log("recaptcha result", result);
      response = result;
    })
    .catch(async reason => {
      console.log("Recaptcha request failure", reason);
      response = reason;
    });
  return response;
});
