const express = require ('express')
const quoteController = require('./controllers/quoteController')
const app = express()

app.use(express.json())

app.get("/api/quotes", quoteController.getQuotes)// read
app.post("/api/quotes", quoteController.addQuotes) //create


app.put("/api/quotes/:id" , quoteController.editQuotes)//edit
app.delete("/api/quotes/:id" , quoteController.deleteQuotes) // delete



app.listen(3333, () => {
    console.log("Listening on 3333")
})

