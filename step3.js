var https = require('https');

function getAndPrintHTML (options) {

  /* Add your code here */

  var data = '';

  var request = https.get(options, function (response) {

    response.on('data', function (chunk) {
      data += chunk + "\n";
    });

    response.on('end', function () {
      console.log('Program ended');
      console.log(data);
    });

    response.on('error', function (err) {
      console.log(err);
    });

  });

  request.on('error', function (err) {
    console.log(err);
  })
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);