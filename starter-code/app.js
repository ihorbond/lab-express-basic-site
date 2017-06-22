const express = require ('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (request, respond, next) => {

respond.render ('index.ejs');
});
app.get('/about', (request, respond, next) => {

  respond.render('about.ejs');
});

app.get('/gallery', (request, respond, next) => {

  respond.render('gallery.ejs');
});
app.listen(3000);
