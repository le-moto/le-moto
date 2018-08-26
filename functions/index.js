const functions = require('firebase-functions');
const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (request, response) => {
	response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
	response.render('index.pug');
});

app.get('/georgetons-story', (request, response) => {
	response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
	response.render('georgetons-story.pug');
});

app.get('/investment-contract', (request, response) => {
	response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
	response.render('investment-contract.pug');
});


 // Create and Deploy Your First Cloud Functions
 // https://firebase.google.com/docs/functions/write-firebase-functions

 exports.app = functions.https.onRequest(app);