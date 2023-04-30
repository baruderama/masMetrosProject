# Back-End set up
```
npm install:
    cors
    express
    morgan
    yargs
    axios
```

## start the server
this you have to install it in administrator cmd: 
(this is for set up the node backend forever without interrumtions)

```
npm install pm2 -g
```

## start the server
In administrator cmd you have ti run this command:

```
pm2 start server.js
```

And for view the server logs:

```
pm2 monit
```