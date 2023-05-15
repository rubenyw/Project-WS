const express = require('express')
const db = require('./src/databases/database');

const app = express();
const port = 3000;

const temp = require('./src/routes/temp');

db.authenticate();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use('/api/temp', temp);