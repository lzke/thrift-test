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
```

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

### Node.js

| Node.js  | Ant     |
| -------- | ------- |
| v16.15.0 | 1.10.12 |

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
node NodeClient.js
```

> ping()
> 1+1=2
> InvalidOperation InvalidOperation: InvalidOperation
> 15-10=5
> Check log: 5