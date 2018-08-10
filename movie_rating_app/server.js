const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');

const app = express();
const router = express.Router();
app.use(morgan('combined'));
app.use(cors());

// connect to mongoDB
mongoose.connect('mongodb://localhost/movie_rating_app', function () {
    console.log('Connection has been made.');
}).catch(err => {
    console.error('Error starting app:', err.stack);
    process.exit(1);
});

router.get('/', function (req, res) {
    res.json({ message: 'API Initialized!' });
});

const port = process.env.API_PORT || 8081;
app.use('/', router);
app.listen(port, function() {
    console.log(`API running on port ${port}`);
})