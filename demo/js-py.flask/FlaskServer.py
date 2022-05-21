import sys

from flask import Flask, request
from flask_cors import CORS
from thrift.TMultiplexedProcessor import TMultiplexedProcessor
from thrift.protocol import TJSONProtocol
from thrift.server import TServer
from thrift.transport import TTransport

sys.path.append("gen-py")
from hello import HelloSvc, TimesTwo


class HelloSvcHandler:
    def hello_func(self):
        print("Hello Called")
        return "hello from Python Flask"


class TimesTwoHandler:
    def dbl(self, val):
        print("Client call:", val)
        return val*2


helloSvcProcessor = HelloSvc.Processor(HelloSvcHandler())
timesTwoProcessor = TimesTwo.Processor(TimesTwoHandler())

processor = TMultiplexedProcessor()
processor.registerProcessor("hello", helloSvcProcessor)
processor.registerProcessor("dbl", timesTwoProcessor)

protocol = TJSONProtocol.TJSONProtocolFactory()


server = TServer.TServer(processor, None, None, None, protocol, protocol)
app = Flask(__name__)
CORS(app)


@app.route("/", methods=['POST'])
def home():
    print(request.data)
    itrans = TTransport.TMemoryBuffer(request.data)
    otrans = TTransport.TMemoryBuffer()
    iprot = server.inputProtocolFactory.getProtocol(itrans)
    oprot = server.outputProtocolFactory.getProtocol(otrans)
    server.processor.process(iprot, oprot)
    return otrans.getvalue()


app.run(host="localhost", port=8585, debug=True)