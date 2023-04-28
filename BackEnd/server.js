const express =require('express');
const routes= require('./routes')

const app = express();
app.set('port',process.env.PORT || 9000)

// routes
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})
app.use('/api', routes)


//Server running
app.listen(app.get('port'),()=>{
    console.log('server running on port',app.get('port'))
})