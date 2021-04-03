import React,{useState, useEffect} from 'react';
import axios from 'axios';



export default ({postId})=>{ 
    
    const [comments,setComments]= useState([]);
    console.log("Post id =",postId);
    const fetchComments = async ()=>{
         const res= await axios.get(`http://localhost:4001/posts/${postId}/comments`);

         setComments(res.data);
    }
    
    useEffect(()=>{
        fetchComments();
        console.log("comments",comments);

},[]);

   const renderedComments =  comments.map((comment)=>{
      return  <li key={comment.id}>{comment.content}</li>
   });
    
    return  <h4><ul>{renderedComments}</ul></h4>

}