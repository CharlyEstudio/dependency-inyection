const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Liberias
const axios = require('axios');

// Handlers
const { users } = require('./endpoints');

// - Inyección de Dependencia -
const usersHandlers = users({ axios }); // Aquí inyectamos axios

// Enpoint para Users
app.get('/', usersHandlers.get);
app.post('/', usersHandlers.post);
app.put('/:id', usersHandlers.put);
app.delete('/:id', usersHandlers.delete);

app.listen(
    port,
    () => console.log(`Example app listening on port ${port}`)
);