const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Stack{
        _id: ID!
        name: String!
        number: Int!
        votes: Int!
    }

    input StkSearchInput{
        score: Int
        sort: String
        limit: Int
        tag: String!
    }

    type StkSearchMutation{
        searchStacks(stkSearch: StkSearchInput):[Stack!]!
    }

    type RootQuery{
        dummy:String
    }

    schema{
        query: RootQuery
        mutation: StkSearchMutation
    }
`);