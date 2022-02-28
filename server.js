import http from "http"
import app from "./app"
import 'dotenv/config'

let port = process.env.PORT || 5000;

app.set('port', port);

const server = http.createServer(app);

console.log()

server.listen(port , ()=>{
    console.log(`server run on port::${port}`);
});