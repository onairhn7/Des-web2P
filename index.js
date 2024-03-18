import Express  from "express";
const app= Express();
import { usuario } from "./routes/routeUser.js";
import cors from 'cors';


//middleware

app.use(Express.json());
const corOptions = {
    origin : '10.0.0.130', 
    methods : ['POST', 'PUT', 'DELETE', 'GET'],
    allowedHeaders : ['Content-Type', 'Authorization']
}

// Rutas
app.use('/api/usuario', usuario);

// puerto
app.listen(4500, ()=>{

    console.log("escuchando en el puerto 4500");
});