import http from "http"
import app from "./app"
import 'dotenv/config'
import database from './config/databases';


// database connexion test
const testDbConnexion = async() =>{
    try {
      await database.authenticate();
      console.log('Database Successfully Connected');
    } catch (error) {
       console.error('Error ff',error);
    }
  };

testDbConnexion();

let port = process.env.PORT || 5000;

app.set('port', port);

const server = http.createServer(app);

server.listen(port , ()=>{
    console.log(`server run on port::${port}`);
});