const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const routes = require('./routes');
const userRouteFile = routes.userRouteFile;
const postRouteFile = routes.postRouteFile;

//postman 
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())

//images 
app.use(express.static('public'))

app.use('/api/user', userRouteFile)
app.use('/api/post', postRouteFile)

const db = require('../models')




app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../front/index.html'))
})




//connect data base to a server 
db.sequelize.sync().then( () => {
	console.log('server will be running on 8080')
	app.listen(8080)
})