import express from "express";
import bodyparser from 'body-parser';
import routes from "./routes/index";

const app = express();

const optionsRawData = {
    inflate: true,
    limit: '100kb',
    type: '*/*'
};

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(bodyparser.raw(optionsRawData));


app.use('/api', routes);


app.get('/', (req, res, next) => {
    res.status(200).send({
        status : 200,
        message : 'Welcome to autoexpress API api v1'});
});


export default app;