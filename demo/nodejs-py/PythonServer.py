import sys
sys.path.append("gen-py")

from hello import HelloSvc, TimesTwo
from thrift.TMultiplexedProcessor import TMultiplexedProcessor
from thrift.protocol import TJSONProtocol
from thrift.server import THttpServer


class HelloSvcHandler:
    def hello_func(self):
        print("Hello Called")
        return "hello from Python"


class TimesTwoHandler:
    def dbl(self, val):
        print("Client call:", val)
        return val*2


helloSvcProcessor = HelloSvc.Processor(HelloSvcHandler())
timesTwoProcessor = TimesTwo.Processor(TimesTwoHandler())

processor = TMultiplexedProcessor()
processor.registerProcessor("hello", helloSvcProcessor)
processor.registerProcessor("dbl", timesTwoProcessor)

protoFactory = TJSONProtocol.TJSONProtocolFactory()
port = 8585
server = THttpServer.THttpServer(processor, ("localhost", port), protoFactory)
print("Python server running on port " + str(port))
server.serve()
