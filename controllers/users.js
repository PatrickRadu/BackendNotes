const userRouter = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

userRouter.post('/', async (request, response) => {
    const {username,name,password} = request.body;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password,saltRounds);
    const user = new User({
        username,
        name,
        passwordHash
    });
    const savedUser = await user.save();
    response.status(201).json(savedUser);
});

userRouter.get('/', async (request, response) => {
    const note= await User.find({}).populate('notes',{content:1});
    response.json(note);
});

module.exports = userRouter;