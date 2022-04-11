const express = require('express');
const path = require('path');
const port = process.env.PORT || '3000';
const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb+srv://jean:123@cluster0.urpjt.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
client.connect().then(() => {
    console.log('connected !')
}).catch(err => {
    console.log(err);
})

const app = express();
app.use(express.static('../client-build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client-build/index.html'));
})

app.listen(port);