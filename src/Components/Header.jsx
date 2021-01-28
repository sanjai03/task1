import banner from '../image/banner.jpg';
import List from "./List";
function Home(){
    return(
    
        <header className="nav-background">
  <div className="container">
    <nav className="navbar navbar-expand-sm ">
      <a href="/"><img src={banner}  height="30px"/></a>
      <ul className="pl-2 navbar-nav ">
        <List text="Home" />
        <List text="Herbal Life" />
        <List text="Store" />
        <List text="Gallary" />
        <List text="Blog" />
        <List text="Contuct Us" />
        
      </ul>
      <ul className="pl-2 navbar-nav ml-auto ">
        <List icon="facebook" />
        <List icon="twitter" />
        <List icon="instagram" />
        <List icon="youtube" />
      </ul>
    </nav>
  </div>
</header>

        
    )
}
export default Home;