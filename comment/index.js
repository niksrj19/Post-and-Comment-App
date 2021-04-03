let express = require("express");
const {randomBytes} = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');
let app = express();
app.use(bodyParser.json());
app.use(cors());

let commentsByPost={};

app.get('/posts/:id/comments',(req,res)=>{

    res.send(commentsByPost[req.params.id] || [])
});

app.post('/posts/:id/comments',(req,res)=>{
    let commentid = randomBytes(4).toString('hex');
    let {content}= req.body;
	console.log(' post comment', commentid);
    const id = req.params.id;

   // console.log(req.params.id, commentid);

    const comments = commentsByPost[id] || [];
    comments.push({ id: commentid , content});
    commentsByPost[id]= comments;
      console.log("comments", commentsByPost);
     res.status(201).send(comments)
});





app.listen(4001,()=>{console.log("Listening on port 4001")});