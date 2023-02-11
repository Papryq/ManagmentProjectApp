const express =  require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const port = process.env.PORT || 5000;


const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development' // True if NODE_ENV status is development, otherwise false
}))

app.listen(port, console.log(`Server running on port ${port}`));