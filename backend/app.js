const express = require ('express');
const app = express();
require('dotenv').config();

const User = require('./models/user')

const {MONGODB_URL} = process.env;

const mongoose = require ('mongoose')
const port = 3002;
try {
   mongoose.connect(MONGODB_URL,{useNewUrlParser:true}) 
} catch (error) {
   console.log (error) 
}
//middle ware used to intercept our calls
app.use(express.json());

app.get('/', (req,res)=>{ //get(tells the app to pick information) takes in two parameters i.e. the path and the call back ..req is to pick information
    res.send('Hello world!')// respond with this text
});

app.post('/login', async (req,res)=>{
    const user = await User.getUser()
    if(user !== null){
        res.json({
            'result':'success',
            'message':'Login Successful'
        })
    }
    return res.json({
        'result':'failure',
        'message':'Login Failed'
    })

})

app.post('/register', (req,res)=>{
    //Register logic
    const {username, password} = req.body
    const user = new User({username, password});
    await user.save()
    console.log(req.body)
    if(user !== null){
        res.json({
            'result':'success',
            'message':'Register Successful'
        })
    }
    return res.json({
        'result':'failure',
        'message':'Register failed'
    });

})

app.delete('/users/:id', (req,res) =>{
    const {id}= req.params
    let ids = id.split(',')
    console.log (typeof ids);
    let str = ' '
    let deletedCount = 0
    ids.forEach(id => {
        deletedCount++;
        str += `${id}`
    });
    
    res.json({
        'result':'success',
        'total_items_deleted': deletedCount,
        'deleted_items':str
    })
})

app.put('/users', (req,res)=>{
    console.log(req.body)
    res.send('Update User')
})

app.patch('/users/:id', (req, res)=>{
    const {id} = req.params;
    
    let user = {
        'id':12,
        'username':'Reyes',
        'gender':'Female',
        'email':'reyes@gmail.com'

    }
    console.log('Old user',user)
    const {username} = req.body;
     if (user.id = id){
        user.username = username;
        res.send(`Updated ${id} to ${username}`)
     } else {
         res.send(`User ${id} not found`)
     }
   
})
app.listen(port, ()=>{
    console.log(`API working on localhost ${port}`)
})

