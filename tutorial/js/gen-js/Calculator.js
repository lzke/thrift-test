//
// Autogenerated by Thrift Compiler (0.16.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
if (typeof Int64 === 'undefined' && typeof require === 'function') {
  var Int64 = require('node-int64');
}


//HELPER FUNCTIONS AND STRUCTURES

Calculator_ping_args = function(args) {
};
Calculator_ping_args.prototype = {};
Calculator_ping_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Calculator_ping_args.prototype.write = function(output) {
  output.writeStructBegin('Calculator_ping_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Calculator_ping_result = function(args) {
};
Calculator_ping_result.prototype = {};
Calculator_ping_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Calculator_ping_result.prototype.write = function(output) {
  output.writeStructBegin('Calculator_ping_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Calculator_add_args = function(args) {
  this.num1 = null;
  this.num2 = null;
  if (args) {
    if (args.num1 !== undefined && args.num1 !== null) {
      this.num1 = args.num1;
    }
    if (args.num2 !== undefined && args.num2 !== null) {
      this.num2 = args.num2;
    }
  }
};
Calculator_add_args.prototype = {};
Calculator_add_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.num1 = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.num2 = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Calculator_add_args.prototype.write = function(output) {
  output.writeStructBegin('Calculator_add_args');
  if (this.num1 !== null && this.num1 !== undefined) {
    output.writeFieldBegin('num1', Thrift.Type.I32, 1);
    output.writeI32(this.num1);
    output.writeFieldEnd();
  }
  if (this.num2 !== null && this.num2 !== undefined) {
    output.writeFieldBegin('num2', Thrift.Type.I32, 2);
    output.writeI32(this.num2);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Calculator_add_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
Calculator_add_result.prototype = {};
Calculator_add_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.I32) {
        this.success = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Calculator_add_result.prototype.write = function(output) {
  output.writeStructBegin('Calculator_add_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.I32, 0);
    output.writeI32(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Calculator_calculate_args = function(args) {
  this.logid = null;
  this.w = null;
  if (args) {
    if (args.logid !== undefined && args.logid !== null) {
      this.logid = args.logid;
    }
    if (args.w !== undefined && args.w !== null) {
      this.w = new Work(args.w);
    }
  }
};
Calculator_calculate_args.prototype = {};
Calculator_calculate_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.logid = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.w = new Work();
        this.w.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Calculator_calculate_args.prototype.write = function(output) {
  output.writeStructBegin('Calculator_calculate_args');
  if (this.logid !== null && this.logid !== undefined) {
    output.writeFieldBegin('logid', Thrift.Type.I32, 1);
    output.writeI32(this.logid);
    output.writeFieldEnd();
  }
  if (this.w !== null && this.w !== undefined) {
    output.writeFieldBegin('w', Thrift.Type.STRUCT, 2);
    this.w.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Calculator_calculate_result = function(args) {
  this.success = null;
  this.ouch = null;
  if (args instanceof InvalidOperation) {
    this.ouch = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
    if (args.ouch !== undefined && args.ouch !== null) {
      this.ouch = args.ouch;
    }
  }
};
Calculator_calculate_result.prototype = {};
Calculator_calculate_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.I32) {
        this.success = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ouch = new InvalidOperation();
        this.ouch.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Calculator_calculate_result.prototype.write = function(output) {
  output.writeStructBegin('Calculator_calculate_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.I32, 0);
    output.writeI32(this.success);
    output.writeFieldEnd();
  }
  if (this.ouch !== null && this.ouch !== undefined) {
    output.writeFieldBegin('ouch', Thrift.Type.STRUCT, 1);
    this.ouch.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Calculator_zip_args = function(args) {
};
Calculator_zip_args.prototype = {};
Calculator_zip_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Calculator_zip_args.prototype.write = function(output) {
  output.writeStructBegin('Calculator_zip_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Calculator_zip_result = function(args) {
};
Calculator_zip_result.prototype = {};
Calculator_zip_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Calculator_zip_result.prototype.write = function(output) {
  output.writeStructBegin('Calculator_zip_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

CalculatorClient = function(input, output) {
  this.input = input;
  this.output = (!output) ? input : output;
  this.seqid = 0;
};
Thrift.inherits(CalculatorClient, SharedServiceClient);

CalculatorClient.prototype.ping = function(callback) {
  this.send_ping(callback); 
  if (!callback) {
  this.recv_ping();
  }
};

CalculatorClient.prototype.send_ping = function(callback) {
  var args = new Calculator_ping_args();
  try {
    this.output.writeMessageBegin('ping', Thrift.MessageType.CALL, this.seqid);
    args.write(this.output);
    this.output.writeMessageEnd();
    if (callback) {
      var self = this;
      this.output.getTransport().flush(true, function() {
        var result = null;
        try {
          result = self.recv_ping();
        } catch (e) {
          result = e;
        }
        callback(result);
      });
    } else {
      return this.output.getTransport().flush();
    }
  }
  catch (e) {
    if (typeof this.output.getTransport().reset === 'function') {
      this.output.getTransport().reset();
    }
    throw e;
  }
};

CalculatorClient.prototype.recv_ping = function() {
  var ret = this.input.readMessageBegin();
  var mtype = ret.mtype;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new Calculator_ping_result();
  result.read(this.input);
  this.input.readMessageEnd();

  return;
};

CalculatorClient.prototype.add = function(num1, num2, callback) {
  this.send_add(num1, num2, callback); 
  if (!callback) {
    return this.recv_add();
  }
};

CalculatorClient.prototype.send_add = function(num1, num2, callback) {
  var params = {
    num1: num1,
    num2: num2
  };
  var args = new Calculator_add_args(params);
  try {
    this.output.writeMessageBegin('add', Thrift.MessageType.CALL, this.seqid);
    args.write(this.output);
    this.output.writeMessageEnd();
    if (callback) {
      var self = this;
      this.output.getTransport().flush(true, function() {
        var result = null;
        try {
          result = self.recv_add();
        } catch (e) {
          result = e;
        }
        callback(result);
      });
    } else {
      return this.output.getTransport().flush();
    }
  }
  catch (e) {
    if (typeof this.output.getTransport().reset === 'function') {
      this.output.getTransport().reset();
    }
    throw e;
  }
};

CalculatorClient.prototype.recv_add = function() {
  var ret = this.input.readMessageBegin();
  var mtype = ret.mtype;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new Calculator_add_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'add failed: unknown result';
};

CalculatorClient.prototype.calculate = function(logid, w, callback) {
  this.send_calculate(logid, w, callback); 
  if (!callback) {
    return this.recv_calculate();
  }
};

CalculatorClient.prototype.send_calculate = function(logid, w, callback) {
  var params = {
    logid: logid,
    w: w
  };
  var args = new Calculator_calculate_args(params);
  try {
    this.output.writeMessageBegin('calculate', Thrift.MessageType.CALL, this.seqid);
    args.write(this.output);
    this.output.writeMessageEnd();
    if (callback) {
      var self = this;
      this.output.getTransport().flush(true, function() {
        var result = null;
        try {
          result = self.recv_calculate();
        } catch (e) {
          result = e;
        }
        callback(result);
      });
    } else {
      return this.output.getTransport().flush();
    }
  }
  catch (e) {
    if (typeof this.output.getTransport().reset === 'function') {
      this.output.getTransport().reset();
    }
    throw e;
  }
};

CalculatorClient.prototype.recv_calculate = function() {
  var ret = this.input.readMessageBegin();
  var mtype = ret.mtype;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new Calculator_calculate_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.ouch) {
    throw result.ouch;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'calculate failed: unknown result';
};

CalculatorClient.prototype.zip = function(callback) {
  this.send_zip(callback); 
};

CalculatorClient.prototype.send_zip = function(callback) {
  var args = new Calculator_zip_args();
  try {
    this.output.writeMessageBegin('zip', Thrift.MessageType.ONEWAY, this.seqid);
    args.write(this.output);
    this.output.writeMessageEnd();
    if (callback) {
      this.output.getTransport().flush(true, null);
      callback();
    } else {
      return this.output.getTransport().flush();
    }
  }
  catch (e) {
    if (typeof this.output.getTransport().reset === 'function') {
      this.output.getTransport().reset();
    }
    throw e;
  }
};
