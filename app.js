var https = require('https');

function getAndPrintHTMLChunks () {

  var data = '';

  var requestOptions = {
    host: 'example.com',
    path: '/'
  };


  /* Add your code here */
  var request = https.get(requestOptions, function (response) {

    response.on('data', function (chunk) {
      data += chunk;
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

getAndPrintHTMLChunks();