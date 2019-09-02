const quotes = [
    {
        "id": 1,
        "quote": `"A positive attitude causes a chain reaction of positive thoughts, events and outcomes. It is a catalyst and it sparks extraordinary results."`,
        "name":"- Wade Boggs"
    },
    {
        "id": 2,
        "quote": `"A strong positive mental attitude will create more miracles than any wonder drug."`,
        "name":"- Patricia Neal"
    },
    {
        "id": 3,
        "quote": `"I am happy every day, because life is moving in a very positive way."`,
        "name":"- Lil Yachty"
    },
    {
        "id": 4,
        "quote": `"No matter what you're going through, there's a light at the end of the tunnel and it may seem hard to get to it but you can do it and just keep working towards it and you'll find the positive side of things."`,
        "name":"- Demi Lovato"
    },
    {
        "id": 5,
        "quote": `"Your positive action combined with positive thinking results in success."`,
        "name":"- Shiv Khera"
    },
    {
        "id": 6,
        "quote": `"Do you feel gloomy? Lift your eyes. Stand on your feet. Say a few words of appreciation and love to the Lord. Be positive."`,
        "name":"- Gordon B. Hinckley"
    },
    {
        "id": 7,
        "quote": `"To succeed, you need to find something to hold on to, something to motivate you, something to inspire you."`,
        "name":"- Tony Dorsett"
    },
    {
        "id": 8,
        "quote": `"Everyone has their own path and you can't judge."`,
        "name":"- Jake Owen"
    },
    {
        "id": 9,
        "quote": `"I think fitness is important. I think a healthy lifestyle is important. I think putting positive energy out there is important and just staying connected with the people."`,
        "name":"- LL Cool J"
    },
    {
        "id": 10,
        "quote": `"I'm a very positive person, but this whole concept of having to always be nice, always smiling, always happy, that's not real. It was like I was wearing a mask. I was becoming this perfectly chiselled sculpture, and that was bad. That took a long time to understand."`,
        "name":"- Alicia Keys"
    },
]



const getQuotes = (req,res) => {
    res.json(quotes)
}


const addQuotes = (req, res) => {
    const {quote, name } = req.body
    quotes.push({quote, name})
    res.json(quotes)
}

const deleteQuotes = (req, res ) => {
    console.log(req.params)
    const deleteID = req.params.id
    const quotesIndex = quotes.findIndex( el => el.id == deleteID)
    quotes.splice(quotesIndex, 1)
    res.status(200).send(quotes)
}


const editQuotes = (req, res) => {
    console.log(req.body)
    const quoteID = req.params.id
    const quotesIndex = quotes.findIndex(el => el.id == quoteID);
    console.log(quotesIndex)
    quotes[quotesIndex].quote = req.body.quote
    res.status(200).send(quotes)


}


// const editQuotes = (req, res) => {
//     res.json()
// }
module.exports = {
    getQuotes,
    addQuotes,
    editQuotes,
    deleteQuotes

}

