//Modules
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

//Setting
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'local_management'
}, 'single'));
app.use(express.urlencoded({extended: false}));

//Routes
app.use(require('./routes/routes'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));


//Server Listens
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});