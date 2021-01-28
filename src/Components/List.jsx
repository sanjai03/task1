function List(props) {
    
   return(
    <li className="nav-item">
    <a href="/" className={props.icon === undefined?"nav-link text-white":"nav-link text-white fa fa-"+props.icon}>{props.text}</a>
  </li>
   ) 
}
export default List