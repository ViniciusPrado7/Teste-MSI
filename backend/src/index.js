require('dotenv').config({ path: '.env'});
const express = require('express');
const route = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const corsOptions = {
    origin: 'https://3a15-2804-1530-106-e84e-e168-8433-f3e3-5a36.ngrok-free.app',
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use('/api', route);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta: http://localhost:${process.env.PORT}/`)
});