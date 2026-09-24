const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let connections = [
    {
        id: 1,
        user: "Guilherme",
        vpnIp: "10.8.0.2",
        sourceIp: "192.168.56.10",
        protocol: "OpenVPN",
        status: "active",
        traffic: "125 MB"
    }
];

// GET /connections
app.get("/connections", (req, res) => {
    res.json(connections);
});

// GET /connections/:id
app.get("/connections/:id", (req, res) => {
    const id = Number(req.params.id);

    const connection = connections.find(c => c.id === id);

    if (!connection) {
        return res.status(404).json({
            error: "Conexão não encontrada"
        });
    }

    res.json(connection);
});

// POST /connections
app.post("/connections", (req, res) => {
    const { user, vpnIp, sourceIp, protocol, status, traffic } = req.body;

    if (!user || !vpnIp || !sourceIp || !protocol || !status || !traffic) {
        return res.status(400).json({
            error: "Todos os campos são obrigatórios"
        });
    }

    const newConnection = {
        id: connections.length > 0
            ? Math.max(...connections.map(c => c.id)) + 1
            : 1,
        user,
        vpnIp,
        sourceIp,
        protocol,
        status,
        traffic
    };

    connections.push(newConnection);

    res.status(201).json(newConnection);
});

// PUT /connections/:id
app.put("/connections/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = connections.findIndex(c => c.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: "Conexão não encontrada"
        });
    }

    const { user, vpnIp, sourceIp, protocol, status, traffic } = req.body;

    connections[index] = {
        id,
        user,
        vpnIp,
        sourceIp,
        protocol,
        status,
        traffic
    };

    res.json(connections[index]);
});

// DELETE /connections/:id
app.delete("/connections/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = connections.findIndex(c => c.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: "Conexão não encontrada"
        });
    }

    const deletedConnection = connections.splice(index, 1);

    res.json({
        message: "Conexão removida com sucesso",
        connection: deletedConnection[0]
    });
});

app.listen(PORT, () => {
    console.log(`GEM Access API rodando em http://localhost:${PORT}`);
});
