import NewsCard from './PostCard'
import image from '../image/nutrion.jpg'
function LatestPost(props){
    
    return(
        <div className="row my-3">
        <div className="col-1"></div>
        <div className ="col-10 mb-3 row">
        <div className="col-10"><h4 className="text-success">Recent News</h4><h2 className="align-left">Our Latest News</h2></div>
        <div className="col-2"><button className="button1">view more</button></div>
        {
            props.posts.map((post)=>
                
                   ( <div key={post.id} className="col-4 mb-3">
                        <NewsCard name={post.title} id={post.id} desc={post.body} />
                    </div>
                   )
                
            )
        }
        
        </div>
</div>
    )
}
export default LatestPost