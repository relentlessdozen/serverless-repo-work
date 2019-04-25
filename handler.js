"use strict";

module.exports.greet = (event, context, callback) => {
  console.log(JSON.stringify(event));
  callback(null, { message: "Hybrid Cloud Club initiation function!" });
};
