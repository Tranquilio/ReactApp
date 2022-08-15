const express = require("express");
const baseForm = require("../form-body")
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));
// apiRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests 
const typeformRoutes = express.Router();
 
typeformRoutes.route("/api/typeform/test").get(async function (req, res) {
    payload = baseForm
    payload.title = "test now"
    const result = await fetch("https://api.typeform.com/forms", {
      method : 'POST',
      headers: {
        Authorization: "Bearer tfp_7dMvjfhHtcYMFCSMytV8Fsop1UT6mHBVtVW7rdgFfPwN_3w5qgeFDNcwU8J",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    const result2 = await fetch("https://api.typeform.com/forms", {
        method : 'GET',
        headers: {
          Authorization: "Bearer tfp_7dMvjfhHtcYMFCSMytV8Fsop1UT6mHBVtVW7rdgFfPwN_3w5qgeFDNcwU8J",
          'Content-Type': 'application/json'
        }
    })
    body = await result2.json()
    formId = body.items[0].id
    console.log(body.items[0].id)
    url = "https://api.typeform.com/forms/" + formId
    const result3 = await fetch(url, {
        method : 'GET',
        headers: {
          Authorization: "Bearer tfp_7dMvjfhHtcYMFCSMytV8Fsop1UT6mHBVtVW7rdgFfPwN_3w5qgeFDNcwU8J",
          'Content-Type': 'application/json'
        }
      })
    body = await result3.json()
    res.json(body)
});

module.exports = typeformRoutes;