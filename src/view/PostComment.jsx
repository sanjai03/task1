import axios from 'axios'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PostComment() {
    const[comments,setComments]=useState([])
    let {id} = useParams()
    const url = "https://jsonplaceholder.typicode.com/posts/"+id+"/comments";
    
     useEffect(()=>{
        axios.get(url)
      .then((res)=>{
      
        setComments(res.data)
      }).catch((err)=>{
        
      })
     },[comments])
     
    
return(
<div>
  {comments&&comments.length&& comments.map((comment)=>{
    return(
      <div className="pad-black">
        <h3>{comment.email}</h3>
        <p>{comment.body}</p>
      </div>
    )
  })}
</div>
)
    
}
export default PostComment