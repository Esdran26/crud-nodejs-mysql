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
    host: 'bvzpkx3415un7hr3w6vb-mysql.services.clever-cloud.com',
    user: 'uxil74xib87oudrl',
    password: 'XbiXbienQ8QAN17J4vCy',
    port: 3306,
    database: 'bvzpkx3415un7hr3w6vb'
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