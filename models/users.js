const moongose = require('mongoose');

const userSchame=new moongose.Schema({
    username:String,
    name:String,
    passwordHash:String,
    notes:[
        {
            type:moongose.Schema.Types.ObjectId,
            ref:'Note'
        }
    ]
})

userSchame.set('toJSON',{
    transform:(document,returnedObject)=>{
        returnedObject.id=returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.passwordHash;
    }
})

const User=moongose.model('User',userSchame);
module.exports=User;