let express = require("express");
const {randomBytes} = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');
let app = express();
app.use(bodyParser.json());
app.use(cors());
let posts={};

app.get('/posts',(req,res)=>{

    res.send(posts)
});

app.post('/posts',(req,res)=>{
    let id = randomBytes(4).toString('hex');
    let {title} = req.body;
     console.log("title",req.body);
     posts[id]={id, title}
     console.log(posts);
     res.status(201).send(posts[id])
});





app.listen(4000,()=>{console.log("Listening on port 4000")})