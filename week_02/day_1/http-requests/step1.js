// while https is built-in to Node, it is a module, so it must be required
var https = require('https');


function getAndPrintHTMLChunks () {
  // the host can be thought of as the domain name you want to read from,
  // and the path is the resource - '/' is the root path, but if you wanted to read a
  // particular resource (like '/login/index.html'), that would be defined in the path
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  // notice that https.get takes a callback with one parameter -
  // response, which is a Stream that represents the HTTP response
  https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      console.log('\n **********************************Chunk Received. Data: \n', data);
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });

}

getAndPrintHTMLChunks();

// Should you require https inside or outside of the function? Does it matter in this case? If not, in what situations would it matter?
// Require a module as a global so you just need to call the module once

// Which of the stream function options ('data', 'error', 'end', 'finish') do you need to use to log the data chunks as they come in?
// data, error and end

// What do you notice about the results? Do you think this is the best way to handle the incoming data? How could we improve upon this?
//it is good in case you lose the connection
