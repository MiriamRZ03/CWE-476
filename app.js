const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true}))

app.post('/alumno', (req, res) => {
    if (req.body.id)
        res.send(`Hola ${alumnos[req.body.id - 1].nombre} ${alumnos[req.body.id - 1].apellido}`);
    else
        res.send('No se han espesificado el id del alumno');
})

app.listen(port, () =>{
    console.log(`Aplicación de ejemplo escuhando en el puerto ${port}`)
})

const alumnos = [
    {nombre: "Pedro", apellido: "Pérez"},
    {nombre: "Rosa", apellido: "Vázquez"},
    {nombre: "Susana", apellido: "Ochia"}
];