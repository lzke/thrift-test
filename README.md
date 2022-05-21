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
node NodeServer.js

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

### Node.js(Client) & Python(Server)

| Node.js  | Python |
| -------- | ------ |
| v16.15.0 | 3.10.4 |

```
thrift.exe -r --gen js:node --gen py --o nodejs-py hello.thrift
```

```
cd nodejs-py
```

```
pip install -r requirements.txt
npm install
```

```
python PythonServer.py

> Python server running on port 8585
> Client call: 25
> Hello Called
> 127.0.0.1 - - [20/May/2022 15:22:47] "POST / HTTP/1.1" 200 -
> 127.0.0.1 - - [20/May/2022 15:22:47] "POST / HTTP/1.1" 200 -
```

```
node NodeClient.js

> { buffer: <Buffer 00 00 00 00 00 00 00 32>, offset: 0 }
> 50
> Msg from server: hello from Python
```

### JavaScript(Client) & Python(Flask Server)

| Python | Flask |
| ------ | ----- |
| 3.10.4 | 2.1.2 |

```
thrift.exe -r --gen js --gen py --o js-py hello.thrift
```

```
cd js-py
```

```
pip install -r requirements.txt
```

```
python FlaskServer.py

> * Serving Flask app 'FlaskServer' (lazy loading)
> * Environment: production
>   WARNING: This is a development server. Do not use it in a production deployment.
>   Use a production WSGI server instead.
> * Debug mode: on
> * Running on http://localhost:8585 (Press CTRL+C to quit)
> * Restarting with stat
> * Debugger is active!
> * Debugger PIN: 704-412-122
>   127.0.0.1 - - [21/May/2022 09:04:59] "OPTIONS / HTTP/1.1" 200 -
>   b'[1,"hello:hello_func",1,0,{}]'
>   Hello Called
>   127.0.0.1 - - [21/May/2022 09:04:59] "POST / HTTP/1.1" 200 -
>   127.0.0.1 - - [21/May/2022 09:05:01] "OPTIONS / HTTP/1.1" 200 -
>   b'[1,"dbl:dbl",1,0,{"1":{"i64":25}}]'
>   Client call: 25
>   127.0.0.1 - - [21/May/2022 09:05:01] "POST / HTTP/1.1" 200 -
```

```
open hello.html with browser

click [Get Message from Node Server]
> Server Response: hello from Python Flask

click [Double 25]
> Server Dbl: 50
```
