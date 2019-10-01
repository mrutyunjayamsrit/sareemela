const http = require('http');
const path = require('path');
const express = require('express');

const errorController = require('./controllers/error');

const adminRoutes = require('./routes/admin');
const shopRoute = require('./routes/shop');
const bodyParser = require('body-parser');
//const expressHbs = require('express-handlebars');

const app = express();

//app.engine('hbs',expressHbs({layoutsDir:'views/layouts',defaultLayout:'main-layout',extname:'hbs'}));
//app.set('view engine', 'hbs');
//Use of pug handle bars
//app.set('view engine', 'pug');
app.set('view engine', 'ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));

app.use('/admin',adminRoutes);
//app.use(adminData.routes);
app.use(shopRoute);

app.use(errorController.get404);
  
app.listen(3000, () => {
   // console.log(`Server started on port`);
});