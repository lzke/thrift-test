const thrift = require("thrift");
const Int64 = require('node-int64');

const helloSvc = require("./gen-nodejs/HelloSvc.js");
const timesTwo = require("./gen-nodejs/TimesTwo.js");


const multiplexer = new thrift.Multiplexer();


const helloSvcOptions = { transport: thrift.TBufferedTransport, protocol: thrift.TJSONProtocol };
const helloSvcConnection = thrift.createHttpConnection("localhost", 8585, helloSvcOptions);
const helloSvcClient = multiplexer.createClient("hello", helloSvc, helloSvcConnection);

helloSvcConnection.on("error", function(err) {
  console.log("Error: " + err);
});

helloSvcClient.hello_func(function(error, result) {
  console.log("Msg from server: " + result);
});


const timesTwoOptions = { transport: thrift.TBufferedTransport, protocol: thrift.TJSONProtocol };
const timesTwoConnection = thrift.createHttpConnection("localhost", 8585, timesTwoOptions);
const timesTwoClient = multiplexer.createClient("dbl", timesTwo, timesTwoConnection);

timesTwoConnection.on("error", function(err) {
  console.log("Error: " + err);
});

timesTwoClient.dbl(25, function(error, result) {
  console.log(result);
  console.log(result.toNumber(true));
});
