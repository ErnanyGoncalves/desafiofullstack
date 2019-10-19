const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Owner{
        reputation: Int
        user_id: Int
        user_type: String
        accept_rate: Int
        profile_image: String
        display_name: String
        link: String
    }

    type Stack{
        tags: [String]
        owner: Owner
        is_answered: Boolean
        view_count: Int
        protected_date: Int
        accepted_answer_id: Int
        answer_count: Int
        score: Int
        last_activity_date: Int
        creation_date: Int
        last_edit_date: Int
        question_id: Int
        link: String
        title: String
    }

    type Result{
        items: [Stack]
        has_more: Boolean
        quota_max: Int
        quota_remaining: Int
    }

    input StkSearchInput{
        score: Int
        sort: String
        limit: Int
        tag: String!
    }

    type StkSearchMutation{
        searchStacks(stkSearch: StkSearchInput): Result
    }

    type RootQuery{
        dummy: String
    }

    schema{
        query: RootQuery
        mutation: StkSearchMutation
    }
`);