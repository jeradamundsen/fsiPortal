const apikey = require('../config/keys')
const request = require('request');


exports.getOpporrtunitiesList = function(apikey, callback) {
  if (apikey.length < 1) {
    var error = new Error();
    error.statusCode = 500;

    return;
  }

  var url = "https://api.insight.ly/v2.3/opportunities";
  var auth = "Basic " + new Buffer(apikey).toString("base64");

  request(
      {
          url : url,
          headers : { "Authorization" : auth }
      },
      function (error, response, body) {
        callback(response, body);
      }
  );
};

exports.createOpportunity = function(apikey, opportunity, callback) {
  if (apikey.length < 1) {
    var error = new Error();
    error.statusCode = 500;

    callback(error, null);
  }

  var url = "https://api.insight.ly/v2.3/opportunities";
  var auth = "Basic " + new Buffer(apikey).toString("base64");

  request.post(
      {
          url: url,
          headers : { "Authorization" : auth },
          form: opportunity
      },
      function (error, response, body) {
          callback(response, body);
      }
  );
};
