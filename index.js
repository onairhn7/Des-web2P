import Express  from "express";
const app= Express();
import { usuario } from "./routes/routeUser.js";
import cors from 'cors';


//middleware

app.use(Express.json());
const corOptions = {
    origin : 'http://localhost:5173', 
    credentials : true,
    methods : ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders : ['Content-Type', 'Authorization']
}

app.use(cors(corOptions));

// Rutas
app.use('/api/usuario', usuario);

// puerto
app.listen(4500, ()=>{

    console.log("escuchando en el puerto 4500");
});