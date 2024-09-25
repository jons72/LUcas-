const express = require('express');
const router = require('./express');
const app = express();

router(app);

const port = 8081;
const server = app.listen(port, () => console.log (`listing on port ${port}`))

module.exports = server