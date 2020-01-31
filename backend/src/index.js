const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://omnistack:NvorO1Ee5QKDeKe3@cluster0-yhxlo.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
    // Métodos HTTP: GET, POST, PUT, DELETE

    // Tipos de Parâmetros:

    // Query Params: request.query (Filtros, ordenação, paginação, ...)
    // Route Params: resquest.params (Identificar um recurso na alteração ou remoção)
    // Body: resquest.body (Dados para criação ou alteração de um registro)

    //MongoDB (Não-relacional)
