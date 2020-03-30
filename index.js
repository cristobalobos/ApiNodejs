import express from 'express';

const app = express();
const PORT = 4000;

//api basica que despues llamamos localhost:4000/
app.get('/', (req, res) =>
    res.send(`Node y express corriendo en el puerto ${PORT}`)
);

// esta escuchando en el puerto 3000
app.listen(PORT, () => 
    console.log(`Tu servidor esta corriendo en el puerto ${PORT}`)
);