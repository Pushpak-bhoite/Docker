// nodemon src/server.js // use this command to run 


const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 3000;

// mongoose.connect('mongodb://localhost:27018/HelloDatabase', {
mongoose.connect('mongodb://mongo-container-1/HelloDatabase', {
    // const MONGO_URI= mongodb://mongo-container/HelloDatabase
    // mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB---');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


const EntrySchema = new mongoose.Schema({
    text: String,
    date: { type: Date, default: Date.now }
})

const Entry = mongoose.model('Entry', EntrySchema);

console.log('---hello-----')

app.get('/', async (req, res) => {
    // res.send('Hello World! This is going to be first docker image')
    console.log('gggg---')
    try {
        const entry = new Entry({ text: `New Entry added on ${new Date().toLocaleString()}` })
        await entry.save();
        res.json({ status: 'Success', message: 'entry added !', data: entry })
    } catch (error) {
        res.status(500).send('Error occured ')
    }
})



app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})