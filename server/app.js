const express = require('express');
const cors = require('cors');
const converterRouter = require('./routes/converter');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());


app.use('/api', converterRouter);

const port = 7000;

const server = app.listen(port, () => console.log(`listening to port ${port}....`));

module.exports = server;
