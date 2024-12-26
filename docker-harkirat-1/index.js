// nodemon src/server.js // use this command to run 


const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 3000

// mongoose.connect('mongodb://localhost:27018/HelloDatabase', {
// mongoose.connect('mongodb://mongo-container-1/HelloDatabase', {
// const MONGO_URI= mongodb://mongo-container-1/HelloDatabase
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


const EntrySchema = new mongoose.Schema({
    text: String,
    date: { type: Date, default: Date.now }
})

const Entry = mongoose.model('Entry', EntrySchema);

app.get('/', async (req, res) => {
    // res.send('Hello World! This is going to be first docker image')
    try {
        const entry = new Entry({ text: 'this is an entry ' })
        await entry.save();
        res.send('entry added !')
    } catch (error) {
        res.status(500).send('Error occured ')
    }
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})