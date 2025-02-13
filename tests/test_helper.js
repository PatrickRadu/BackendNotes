const Note=require('../models/note')   

const initialNotes=[
    {
        content:'HTML is easy',
        important:false
    },
    {
        content:'Browser can execute only Javascript',
        important:true
    }
]

const nonExistingId=async()=>{
    const note=new Note({content:'willremovethissoon',date:new Date()})
    await note.save()
    await note.deleteOne()

    return note._id.toString()
}

const notesInDb=async()=>{
    const notes=await Note.find({})
    return notes.map(note=>note.toJSON())
}

const User = require('../models/user')

// ...

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
  initialNotes,
  nonExistingId,
  notesInDb,
  usersInDb,
}