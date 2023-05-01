# Back-End set up
```
npm install cors express morgan yargs axios
```

## Start the server
This you have to install it in administrator cmd: 
(this is for set up the node backend forever without interrumtions)

```
npm install pm2 -g
```

In administrator cmd you have to run this command:

```
pm2 start server.js
```

And for view the server logs:

```
pm2 monit
```