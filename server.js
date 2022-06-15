const { application } = require('express');
const express = require('express');
const cors = require('cors');

const app = express();
//app.use(cors({origin: "*"}))

const { quotes } = require('./data');
const { getRandomElement, getByAuthor } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));
app.use(express.json())


app.listen(PORT, () => console.log(`Server up at port:${PORT}`));

// app.get('/', (res, req, next) => {
//     //res.send(randomQuote);
// })

app.get('/api/quotes/random', (req, res, next) => {
    const randomQuote = getRandomElement(quotes);
    res.send(randomQuote);  
})

app.get('/api/quotes', (req, res, next) => {
    console.log(req.query)
    res.send(quotes);
    
}) ;

app.get('/api/quotes/pers', (req, res, next) => {
    const author = req.query.person;
    const authorQuotes = getByAuthor(quotes, author)
    res.send(authorQuotes);
}) ;

app.post('/api/quotes', (req, res, next) => {
    const quote = req.query.quote;
    const person = req.query.person;
    const obj = {quote, person};
    quotes.push(obj);
    console.log(obj)
    res.send(obj)
})