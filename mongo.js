// const mongoose = require('mongoose');

// if (process.argv.length < 3) {
//   console.log('Please provide the password as an argument: node mongo.js <password>');
//   process.exit(1);
// }

// const password=process.argv[2]

// const url=`mongodb+srv://patrickmunteanu567:${password}@cluster0.mga9v.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

// mongoose.connect(url);

// const notesSchema = new mongoose.Schema({
//     content: String,
//     important: Boolean,
//     });

//     const Note=mongoose.model('Note',notesSchema)

//     // const note=new Note({
//     //     content:'Javascript is ez',
//     //     important:false,
//     // })

//     // note.save().then(result=>{
//     //     console.log('note saved!')
//     //     mongoose.connection.close()
//     // })

//     Note.find({important:true}).then(result=>{
//         result.forEach(note=>{
//             console.log(note)
//         })
//         mongoose.connection.close()
//     })