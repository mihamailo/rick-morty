const express = require('express');
const port = process.env.PORT || 8081;
const app = express();

app.use(express.static('build'))
app.listen(port, () => console.log(`on port ${port}`))