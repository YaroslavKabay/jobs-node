const express = require('express');
require('dotenv').config()

const {applicantsRoute,positionsRoute} = require('./routes')
const { PORT, MONGO_URL} = require('./configs/configs')
// const { mainErrorHandler } = require("./errors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
    console.log('Request processed')
    res.json("hello")
})

app.use('/positions', positionsRoute);
// app.use('/applicants', applicantsRoute);


app.use('*', (req, res, next)=>{
    next (new Error('Route not found'))
})

app.listen(PORT, () => {
    console.log('App listen', PORT)
});




//cmnd + opt + l порівняє все


