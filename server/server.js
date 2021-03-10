const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes');


let app = express();

app.use(cors());
app.use(express.json());



app.listen(3000);

