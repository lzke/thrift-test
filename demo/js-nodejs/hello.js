/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const thrift = require("thrift");
const HelloSvc = require("./gen-nodejs/HelloSvc.js");
const TimesTwoSvc = require("./gen-nodejs/TimesTwo.js");

const helloHandler = {
  hello_func: function(result) {
    this.call_counter = this.call_counter || 0;
    console.log("Client call: " + ++this.call_counter);
    result(null, "Hello Apache Thrift for JavaScript " + this.call_counter);
  }
};

const timesTwoHandler = {
  dbl: function(val, result) {
    console.log("Client call: " + val);
    result(null, val * 2);
  }
};

const helloService = {
  transport: thrift.TBufferedTransport,
  protocol: thrift.TJSONProtocol,
  processor: HelloSvc,
  handler: helloHandler
};

const dblService = {
  transport: thrift.TBufferedTransport,
  protocol: thrift.TJSONProtocol,
  processor: TimesTwoSvc,
  handler: timesTwoHandler
};

const ServerOptions = {
  files: ".",
  cors: {
    "*": true
  },
  services: {
    "/hello": helloService,
    "/dbl": dblService
  }
};

const server = thrift.createWebServer(ServerOptions);
const port = 8585;
server.listen(port);
console.log("Http/Thrift Server running on port: " + port);
