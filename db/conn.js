import pg from 'pg-promise';

import dotenv from 'dotenv';

dotenv.config();

const pgp = pg()

const user= process.env._user;
const pass= process.env._pass;
const dataBase = process.env._bd;
const host= process.env._host;


const cnstr = `postgresql://${user}:${pass}@${host}:5432/${dataBase}`;



const db = pgp (cnstr);


db.connect()
    .then (()=>{

        console.log("conexion exitosa chiki");
    })

    .catch((err)=>{

        console.log(`error de conexion chiki ${err}`)

    })

    export {db}