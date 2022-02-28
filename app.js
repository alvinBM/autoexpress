import express from "express";

const app = express();

app.use((req, res) => {
    res.json(
        {
            "code" : 200,
            "message" : "Votre requete a ete traitée avec succès ggg hjdshdjxw."
        }
    )
});

export default app;