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
    return await user.findOne({username:username});
}
userSchema.statics.add = async()=>{
    
}

//it needs to be exported
const user = mongoose.model('User', userSchema);
module.exports = user;