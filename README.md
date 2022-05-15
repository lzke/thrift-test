# Thrift Test

## Thrift

| Thrift | Test Platform |
| ------ | ------------- |
| 0.16.0 | Windows 11    |

## Tutorial

```
cd tutorial
```

### Java

| Java | Ant     |
| ---- | ------- |
| 8    | 1.10.12 |

```
thrift.exe -r --gen java --o java tutorial.thrift
```

```
cd java
```

```
ant tutorial

> Buildfile: thrift-test\tutorial\java\build.xml
> 
> init:
> 
> generate:
> 
> compile:
> 
> tutorial:
>  [jar] Building jar: thrift-test\tutorial\java\tutorial.jar
>  [echo] tutorial client simple:
>  [java] ping()
>  [java] 1+1=2
>  [java] Invalid operation: Cannot divide by 0
>  [java] 15-10=5
>  [java] Check log: 5
>  [echo] tutorial client secure:
>  [java] ping()
>  [java] 1+1=2
>  [java] Invalid operation: Cannot divide by 0
>  [java] 15-10=5
>  [java] Check log: 5
>  [java] Timeout: killed the sub-process
>  [java] Java Result: -1
> 
> BUILD SUCCESSFUL
> Total time: 12 seconds
```

### Node.js

| Node.js  |
| -------- |
| v16.15.0 |

```
thrift.exe -r --gen js:node --o nodejs tutorial.thrift
```

```
cd nodejs
```

```
npm install
```

```
node NodeServer.js

> ping()
> add( 1 , 1 )
> calculate( 1 , { num1: 1, num2: 0, op: 4, comment: null } )
> calculate( 1 , { num1: 15, num2: 10, op: 2, comment: null } )
> getStruct( 1 )
```

```
node NodeClient.js

> ping()
> 1+1=2
> InvalidOperation InvalidOperation: InvalidOperation
> 15-10=5
> Check log: 5
```

### Python

| Python |
| ------ |
| 3.10.4 |

```
thrift.exe -r --gen py --o py tutorial.thrift
```

```
cd py
```

```
pip install -r requirements.txt
```

```
python PythonServer.py

> Starting the server...
> ping()
> add(1,1)
> calculate(1, Work(num1=1, num2=0, op=4, comment=None))
> calculate(1, Work(num1=15, num2=10, op=2, comment=None))
> getStruct(1)
```

```
python PythonClient.py

> ping()
> 1+1=2
> InvalidOperation: InvalidOperation(whatOp=4, why='Cannot divide by 0')
> 15-10=5
> Check log: 5
```

### Python(Twisted)

| Python | Twisted |
| ------ | ------- |
| 3.10.4 | 22.4.0  |

```
thrift.exe -r --gen py:twisted --o py.twisted tutorial.thrift
```

```
cd py.twisted
```

```
pip install -r requirements.txt
```

```
python PythonServer.py

> ping()
> add(1,1)
> calculate(1, Work(num1=1, num2=0, op=4, comment=None))
> Traceback (most recent call last):
>   File "D:\WORKSPACE\thrift-test\tutorial\py.twisted\PythonServer.py", line 68, in calculate
>     raise InvalidOperation(work.op, 'Cannot divide by 0')
> tutorial.ttypes.InvalidOperation: InvalidOperation(whatOp=4, why='Cannot divide by 0')
> calculate(1, Work(num1=15, num2=10, op=2, comment=None))
> getStruct(1)
```

```
python PythonClient.py

> ping()
> 1+1=2
> Whoa? You know how to divide by zero?
> FYI the answer is 0
> 15-10=5
> Check log: 5
```

### JavaScript(Client) & Java(Server)

| Java | Ant     |
| ---- | ------- |
| 8    | 1.10.12 |

```
thrift.exe -r --gen js --o js tutorial.thrift
thrift.exe -r --gen java --o java tutorial.thrift
```

```
cd js
```

```
ant tutorialserver

> Buildfile: thrift-test\tutorial\js\build.xml
> 
> init:
>     [mkdir] Created dir: thrift-test\tutorial\js\build
> 
> compile:
> 
> tutorial:
> 
> generate:
> 
> tutorialserver:
>      [java] Listening on port 8088
>      [java] Point your browser to http://localhost:8088/tutorial/js/tutorial.html
```

## Demo

```
cd demo
```

### JavaScript(Client) & Nodejs(Server)

| Node.js  |
| -------- |
| v16.15.0 |

```
thrift.exe -r --gen js --gen js:node --o js-nodejs hello.thrift
```

```
cd js-nodejs
```

```
npm install
```

```
node hello.js

> Http/Thrift Server running on port: 8585
> Client call: 1
> Client call: 25
```

```
open hello.html with browser

click [Get Message from Node Server]
> Server Response: Hello Apache Thrift for JavaScript 1

click [Double 25]
> Server Dbl: 50
```