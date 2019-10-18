const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");

const graphqlHttp = require("express-graphql");
const graphqlSchema = require("./schema");
const graphqlResolver = require("./resolvers");

const app = express();
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use('/graphql', graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
}));

app.listen(3000, () => {
    console.log("Connected to localhost:3000/graphql");
});
