const express = require ('express');
const app = express();
const port = 3002;

//middle ware used to intercept our calls
app.use(express.json());

app.get('/', (req,res)=>{ //get(tells the app to pick information) takes in two parameters i.e. the path and the call back ..req is to pick information
    res.send('Hello world!')// respond with this text
});

app.get('/login', (req,res)=>{
    res.json({
        'result':'success',
        'message':'Login Successful'
    })
})

app.post('/register', (req,res)=>{
    //Register logic

    console.log(req.body)

    res.json({
        'result':'success',
        'message':'Register Successful'
    })
})

app.delete('/users/:id', (req,res) =>{
    const {id}= req.params
    res.send(`Deleted ${id}`)
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

