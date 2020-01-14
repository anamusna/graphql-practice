const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');

// Import GraphQL components
const schema = require('./schema');
const resolvers = require('./resolvers');

// Import configuration and connect to DB
const { dbURL, dbName } = require('./config');
mongoose.connect(dbURL + '/' + dbName, { useNewUrlParser: true });

// Define "context" just for testing
const context = {
	greeting : 'Hello you are in!'
};

// Set up Express server
const app = express();
app.use(
	'/graphql',
	graphqlHTTP({
		schema    : schema,
		rootValue : resolvers,
		context   : context,
		graphiql  : true
	})
);

app.listen(4000);
console.log('Your GraphQL API server is running at localhost:4000/graphql');
