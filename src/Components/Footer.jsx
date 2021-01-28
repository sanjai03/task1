import logo from '../image/logo.png'
function Footer(){
    return(
        <footer className="bg-dark">
            <div className="footer-block row py-2 my-3 col-9">
              <div className="col-4">
                <div >
                  <img src={logo} alt="logo" className="footer-logo"  />
  
                </div>
                <p className="text-white">
                  Proper, balanced nutrition provides the nutrients you need every day to fuel your daily 
                  activities, promote and maintain a lifetime of good health and make your best shape a reality.
                  
                </p>
              </div>
              <div className="col-4">
                <h2 className="text-success">CONTACT US</h2>
                  <span className="text-white" ><i className=" fa text-success fa-address-card"></i>
                  68/75-79, Subba Road Avenue, Nungambakkam, Chennai, Tamil Nadu 600034</span><br/>
                  <span className="text-white" ><i className=" fa text-success fa-phone"></i>
                    044-353654</span><br/>
                    <span className="text-white" ><i className=" fa text-success fa-envelope-square"></i>
                    nutrient@gmail.com</span>
              </div>
              <div className="col-4">
                <h2 className="text-success">SUBSCRIBE US</h2>
                <p className="text-white">stay updated with our latest news.we promise not to spam</p>
                <div className="bg-success text-white p-3 footer-btn">Your Email<i className="float-right fa fa-envelope"></i></div>
              </div>
              
            </div>
            <div className="text-center text-white" className ="footer-bottom"> copyrights 2020 herbal</div>
          </footer>
    )
}
export default Footer;