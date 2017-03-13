var getHTML = require('../http-functions');

var reverse = require('reverse-string');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {

  console.log(reverse(html));

}

getHTML(requestOptions, printReverse);