require('dotenv').config()
const mongoose = require('mongoose')
//const config = require('./utils/config')

const url = process.env.TEST_MONGODB_URI

mongoose.set('strictQuery', false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

Note.find({}).then((result) => {
  result.forEach((note) => {
    console.log(note)
  })
  mongoose.connection.close()
})

/* const note = new Note({
  content: 'Si esto no se ve la api tiene algo',
  important: false,
})

note.save().then(() => {
  console.log('note saved!')
  mongoose.connection.close()
})
 */