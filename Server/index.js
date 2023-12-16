const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT ||  3000;
const { connection } = require('./connection')
const ProjectRoute = require('./routes/projects')
const cors = require('cors');
app.use(cors());

connection(`${process.env.DATABASE_CONNECTION}`)

app.get('/', (req,res) => {
    res.send("hello world")
})

app.use('/projects', ProjectRoute);


app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})

