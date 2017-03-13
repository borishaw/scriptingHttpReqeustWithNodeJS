var https = require('https');

function getHTML (options, callback) {

  /* Add your code here */
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

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);