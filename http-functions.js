module.exports = function getHTML (options, callback) {

  var https = require('https');

  /* Your code here */
  var data = '';

  var request = https.get(options, function (response) {

    response.on('data', function (chunk) {
      data += chunk + "\n";
    });

    response.on('end', function () {
      callback(data);
    });

    response.on('error', function (err) {
      console.log(err);
    });

  });
};