#
# Autogenerated by Thrift Compiler (0.16.0)
#
# DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
#
#  options string: py
#

from thrift.Thrift import TType, TMessageType, TFrozenDict, TException, TApplicationException
from thrift.protocol.TProtocol import TProtocolException
from thrift.TRecursive import fix_spec

import sys
import shared.ttypes

from thrift.transport import TTransport
all_structs = []


class Operation(object):
    """
    You can define enums, which are just 32 bit integers. Values are optional
    and start at 1 if not supplied, C style again.

    """
    ADD = 1
    SUBTRACT = 2
    MULTIPLY = 3
    DIVIDE = 4

    _VALUES_TO_NAMES = {
        1: "ADD",
        2: "SUBTRACT",
        3: "MULTIPLY",
        4: "DIVIDE",
    }

    _NAMES_TO_VALUES = {
        "ADD": 1,
        "SUBTRACT": 2,
        "MULTIPLY": 3,
        "DIVIDE": 4,
    }


class Work(object):
    """
    Structs are the basic complex data structures. They are comprised of fields
    which each have an integer identifier, a type, a symbolic name, and an
    optional default value.

    Fields can be declared "optional", which ensures they will not be included
    in the serialized output if they aren't set.  Note that this requires some
    manual management in some languages.

    Attributes:
     - num1
     - num2
     - op
     - comment

    """


    def __init__(self, num1=0, num2=None, op=None, comment=None,):
        self.num1 = num1
        self.num2 = num2
        self.op = op
        self.comment = comment

    def read(self, iprot):
        if iprot._fast_decode is not None and isinstance(iprot.trans, TTransport.CReadableTransport) and self.thrift_spec is not None:
            iprot._fast_decode(self, iprot, [self.__class__, self.thrift_spec])
            return
        iprot.readStructBegin()
        while True:
            (fname, ftype, fid) = iprot.readFieldBegin()
            if ftype == TType.STOP:
                break
            if fid == 1:
                if ftype == TType.I32:
                    self.num1 = iprot.readI32()
                else:
                    iprot.skip(ftype)
            elif fid == 2:
                if ftype == TType.I32:
                    self.num2 = iprot.readI32()
                else:
                    iprot.skip(ftype)
            elif fid == 3:
                if ftype == TType.I32:
                    self.op = iprot.readI32()
                else:
                    iprot.skip(ftype)
            elif fid == 4:
                if ftype == TType.STRING:
                    self.comment = iprot.readString().decode('utf-8', errors='replace') if sys.version_info[0] == 2 else iprot.readString()
                else:
                    iprot.skip(ftype)
            else:
                iprot.skip(ftype)
            iprot.readFieldEnd()
        iprot.readStructEnd()

    def write(self, oprot):
        if oprot._fast_encode is not None and self.thrift_spec is not None:
            oprot.trans.write(oprot._fast_encode(self, [self.__class__, self.thrift_spec]))
            return
        oprot.writeStructBegin('Work')
        if self.num1 is not None:
            oprot.writeFieldBegin('num1', TType.I32, 1)
            oprot.writeI32(self.num1)
            oprot.writeFieldEnd()
        if self.num2 is not None:
            oprot.writeFieldBegin('num2', TType.I32, 2)
            oprot.writeI32(self.num2)
            oprot.writeFieldEnd()
        if self.op is not None:
            oprot.writeFieldBegin('op', TType.I32, 3)
            oprot.writeI32(self.op)
            oprot.writeFieldEnd()
        if self.comment is not None:
            oprot.writeFieldBegin('comment', TType.STRING, 4)
            oprot.writeString(self.comment.encode('utf-8') if sys.version_info[0] == 2 else self.comment)
            oprot.writeFieldEnd()
        oprot.writeFieldStop()
        oprot.writeStructEnd()

    def validate(self):
        return

    def __repr__(self):
        L = ['%s=%r' % (key, value)
             for key, value in self.__dict__.items()]
        return '%s(%s)' % (self.__class__.__name__, ', '.join(L))

    def __eq__(self, other):
        return isinstance(other, self.__class__) and self.__dict__ == other.__dict__

    def __ne__(self, other):
        return not (self == other)


class InvalidOperation(TException):
    """
    Structs can also be exceptions, if they are nasty.

    Attributes:
     - whatOp
     - why

    """


    def __init__(self, whatOp=None, why=None,):
        super(InvalidOperation, self).__setattr__('whatOp', whatOp)
        super(InvalidOperation, self).__setattr__('why', why)

    def __setattr__(self, *args):
        raise TypeError("can't modify immutable instance")

    def __delattr__(self, *args):
        raise TypeError("can't modify immutable instance")

    def __hash__(self):
        return hash(self.__class__) ^ hash((self.whatOp, self.why, ))

    @classmethod
    def read(cls, iprot):
        if iprot._fast_decode is not None and isinstance(iprot.trans, TTransport.CReadableTransport) and cls.thrift_spec is not None:
            return iprot._fast_decode(None, iprot, [cls, cls.thrift_spec])
        iprot.readStructBegin()
        whatOp = None
        why = None
        while True:
            (fname, ftype, fid) = iprot.readFieldBegin()
            if ftype == TType.STOP:
                break
            if fid == 1:
                if ftype == TType.I32:
                    whatOp = iprot.readI32()
                else:
                    iprot.skip(ftype)
            elif fid == 2:
                if ftype == TType.STRING:
                    why = iprot.readString().decode('utf-8', errors='replace') if sys.version_info[0] == 2 else iprot.readString()
                else:
                    iprot.skip(ftype)
            else:
                iprot.skip(ftype)
            iprot.readFieldEnd()
        iprot.readStructEnd()
        return cls(
            whatOp=whatOp,
            why=why,
        )

    def write(self, oprot):
        if oprot._fast_encode is not None and self.thrift_spec is not None:
            oprot.trans.write(oprot._fast_encode(self, [self.__class__, self.thrift_spec]))
            return
        oprot.writeStructBegin('InvalidOperation')
        if self.whatOp is not None:
            oprot.writeFieldBegin('whatOp', TType.I32, 1)
            oprot.writeI32(self.whatOp)
            oprot.writeFieldEnd()
        if self.why is not None:
            oprot.writeFieldBegin('why', TType.STRING, 2)
            oprot.writeString(self.why.encode('utf-8') if sys.version_info[0] == 2 else self.why)
            oprot.writeFieldEnd()
        oprot.writeFieldStop()
        oprot.writeStructEnd()

    def validate(self):
        return

    def __str__(self):
        return repr(self)

    def __repr__(self):
        L = ['%s=%r' % (key, value)
             for key, value in self.__dict__.items()]
        return '%s(%s)' % (self.__class__.__name__, ', '.join(L))

    def __eq__(self, other):
        return isinstance(other, self.__class__) and self.__dict__ == other.__dict__

    def __ne__(self, other):
        return not (self == other)
all_structs.append(Work)
Work.thrift_spec = (
    None,  # 0
    (1, TType.I32, 'num1', None, 0, ),  # 1
    (2, TType.I32, 'num2', None, None, ),  # 2
    (3, TType.I32, 'op', None, None, ),  # 3
    (4, TType.STRING, 'comment', 'UTF8', None, ),  # 4
)
all_structs.append(InvalidOperation)
InvalidOperation.thrift_spec = (
    None,  # 0
    (1, TType.I32, 'whatOp', None, None, ),  # 1
    (2, TType.STRING, 'why', 'UTF8', None, ),  # 2
)
fix_spec(all_structs)
del all_structs
