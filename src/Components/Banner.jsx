function Banner(props){
    return(
        <div>
          <img className={props.imgClass} src={props.img} height="50%" width="95%" />
          <div className={"row "+props.contentClass}>
            <div className="col-2"></div>
            {props.children}
          </div>
        </div>
    )
}
export default Banner