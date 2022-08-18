const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

let homeRouter = require('./routes/home');


app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'views'));

/*capturar información*/
app.use(express.urlencoded({ extended : false}));
app.use(express.json())

app.use(express.static( '../public'));

/*usamos las variables*/
app.use('/', homeRouter);

/* Error 404 */
app.use((req, res, next) => {
    res.status(404).render('404')
})


app.get('/', function(req, res) {
    res.send('Binevenidos a VerdeUva'); // en la vista de localhost:3000 me muestra en mensaje Bienvenidos alsitio//
})

/*app.listen(5000, () => console.log('Esto fue exitoso')); */ //en la terminal muestra el mensaje Esto fue exitoso//

app.listen(PORT, () => console.log(`
Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}
`))

