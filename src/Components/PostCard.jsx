import { Link } from "react-router-dom";

function NewsCard(props){
    return(
        <div className="p-3 card">
           <div className="card-body-height">
           <h4 className=" product-txt text-success px-1">{props.name}</h4>
        <p className=" px-1 text-primary">{props.desc}
        </p>
               </div> 
        
    
        <p className="row"><Link to={"/post/"+props.id} className="col-6 text-primary">view</Link><Link to={"/post/comments/"+props.id} className="col-6 text-primary">comments</Link></p>
      </div>
    )
}
export default NewsCard