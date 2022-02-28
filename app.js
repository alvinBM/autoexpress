const express = require('express');

const app = express();

app.use((req, res) => {
    res.json(
        {
            "code" : 200,
            "message" : "Votre requete a ete traitée avec succès."
        }
    )
});

module.exports = app;