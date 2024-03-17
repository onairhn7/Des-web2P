import Express  from "express";
const app= Express();
import { usuario } from "./routes/routeUser.js";


//middleware

app.use(Express.json());

app.use('/api/usuario', usuario);


app.listen(4500, ()=>{

    console.log("escuchando en el puerto 4500");
});