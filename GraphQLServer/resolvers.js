const fetch = require('node-fetch');

module.exports = {
    searchStacks: async function(args) {
        const score = args.stkSearch.score;
        const sort = args.stkSearch.sort;
        const limit = args.stkSearch.limit;
        const tag = args.stkSearch.tag + ";javascript";

        const minScoreParam = sort === 'votes' ? `min=${score}&` : '';

        const url = `https://api.stackexchange.com/2.2/questions?${minScoreParam}sort=${sort}&pagesize=${limit}&tagged=${tag}&site=stackoverflow&key=4qFzUgFO)svH8Y5rEGdYpA((`;

        const stacks = await fetch(url)
        .then(res => res.text())
        .then(data=>{
            // console.log(JSON.parse(data));
            return JSON.parse(data);
        }).catch(err=>console.log("Erro: ", err));
        console.log(stacks.has_more);
        // console.log(stacks.items);
        return {has_more:stacks.has_more, items:{score: stacks.items.score, title: stacks.items.title}};
    }
    // searchStacks(args) {
    //     const score = args.stkSearch.score;
    //     const sort = args.stkSearch.sort;
    //     const limit = args.stkSearch.limit;
    //     const tag = args.stkSearch.tag + ";javascript";

    //     const minScoreParam = sort === 'votes' ? `min=${score}&` : '';

    //     const url = `https://api.stackexchange.com/2.2/questions?${minScoreParam}sort=${sort}&pagesize=${limit}&tagged=${tag}&site=stackoverflow&key=4qFzUgFO)svH8Y5rEGdYpA((`;

    //     const stacks = fetch(url)
    //     .then(res => res.text())
    //     .then(data=>{
    //         console.log(JSON.parse(data));
    //         return JSON.parse(data);
    //     }).catch(err=>console.log("Erro: ", err));

    //     return stacks;
    // }
};