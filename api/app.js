const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const webapi = require("./routes/public");

let app = express();
app.use(cors({origin: true}));
app.disable("x-powered-by");
app.use(bodyParser.json());

app.use(`/api/web`, webapi);

app.use((err, req, res, next) => {
    res.status(400).json({ error: err.message });
});

module.exports = app;