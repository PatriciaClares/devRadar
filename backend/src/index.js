const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:NvorO1Ee5QKDeKe3@cluster0-yhxlo.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

    // Métodos HTTP: GET, POST, PUT, DELETE

    // Tipos de Parâmetros:

    // Query Params: request.query (Filtros, ordenação, paginação, ...)
    // ROute Params: resquest.params (Identificar um recurso na alteração ou remoção)
    // Body: resquest.body (Dados para criação ou alteração de um registro)

    //MongoDB (Não-relacional)

app.listen(3333);