var https = require('https');

function getAndPrintHTML () {

  var data = '';

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */

  var request = https.get(requestOptions, function (response) {

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

getAndPrintHTML();