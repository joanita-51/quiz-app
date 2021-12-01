const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default:Date.now()
    },
    name: String,
    username:{
        type:String,
        required:true,
        trim: true,
        unique: 1
    } ,
    password:{
        type: String,
    }

})
//get a user from the database
userSchema.statics.getUser =  async(username)=>{
    //the one in the database : the one specified to be found
    const USER = await user.findOne({username:username});
    return{
        id:USER._id,
        createdAt:USER.createdAt,
        username:USER.username
    }
}
userSchema.statics.getUserByTerm = async(term = null)=>{
    let users = await user.find({name:term});
    if(users?.length>0){
        users.map(user =>({
            id:user._id,
            createdAt:user.createdAt,
            username:user.username,
        }))
        return users
    }

    users = await user.find({email:term});
    if(users?.length>0){
        users.map(user =>({
            id:user._id,
            createdAt:user.createdAt,
            username:user.username,
        }))
        return users
    }

    users = await user.find({username:term});
    if(users?.length>0){
        users.map(user =>({
            id:user._id,
            createdAt:user.createdAt,
            username:user.username,
        }))
        return users
    }

    users = await user.find({phone:term});
    if(users?.length>0){
        users.map(user =>({
            id:user._id,
            createdAt:user.createdAt,
            username:user.username,
        }))
        return users
    }

    return null

}

userSchema.statics.getUserById = async(id)=>{
    const USER = await user.findById(id);
    return {
        id: USER._id,
        createdAt:USER.createdAt,
        username:USER.username,
    }
}

//it needs to be exported
const user = mongoose.model('User', userSchema);
module.exports = user;