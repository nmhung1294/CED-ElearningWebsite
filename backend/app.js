const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const courseRouter = require('./routes/courseR');
app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

courseRouter(app);
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});