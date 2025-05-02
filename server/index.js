const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');

app.use(cors());

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('server running');
});

server.listen(4000, () => 'server running and listen on port 4000');