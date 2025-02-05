const notesRouter = require('express').Router()
const Note = require('../models/note')
const User=require('../models/users')
notesRouter.get('/',async (request, response) => {
  // Note.find({}).then(notes => {
  //   response.json(notes)
  // })
  const notes=await Note.find({}).populate('user',{username:1,name:1})
  response.json(notes)
})

notesRouter.get('/:id',async (request, response, next) => {
  const notes=await Note.findById(request.params.id)
  response.json(notes)
})

notesRouter.post('/', async (request, response) => {
  const body = request.body

  const user = await User.findById(body.userId)

  const note = new Note({
    content: body.content,
    important: body.important === undefined ? false : body.important,
    user: user.id
  })

  const savedNote = await note.save()
  user.notes = user.notes.concat(savedNote._id)
  await user.save()
  
  response.status(201).json(savedNote)
})

notesRouter.delete('/:id', (request, response, next) => {
  Note.findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

notesRouter.put('/:id', (request, response, next) => {
  const body = request.body

  const note = {
    content: body.content,
    important: body.important,
  }

  Note.findByIdAndUpdate(request.params.id, note, { new: true })
    .then(updatedNote => {
      response.json(updatedNote)
    })
    .catch(error => next(error))
})

module.exports = notesRouter