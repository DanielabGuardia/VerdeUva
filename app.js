const express = require('express');
const app = express();
const PORT = 5000;


app.get('/', function(req, res) {
    res.send('Binevenidos a VerdeUva'); // en la vista de localhost:3000 me muestra en mensaje Bienvenidos alsitio//
})

/*app.listen(5000, () => console.log('Esto fue exitoso')); */ //en la terminal muestra el mensaje Esto fue exitoso//

app.listen(PORT, () => console.log(`
Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}
`))