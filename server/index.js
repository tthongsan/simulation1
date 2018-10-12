const express = require('express');
const bodyParser = require('body-parser');
const SC = require('./controller/save_controller');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());



const PORT = 4000;
app.listen(PORT, () => {
    console.log(`listening to port ${PORT} 🦍`)
})