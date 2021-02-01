import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactBanner from "../image/contact-banner.jpg"
import ContactBanner2 from "../image/contact-banner-2.jpg"

function Contact() {
    return(
        <>
        <Header />
        <div className="container-fluid" >
            <div>
                <img src={ContactBanner} className="banner-background" height="50%" width="100%"/>
                <div className="row contact-banner-detail"  >
                    <div className="col-4"></div>
                    <div align="center" className="col-4">
                        <h2 className="text-white">Contact Us</h2>
                        <button className="button-1">Contact Us</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <h2 className="text-center">Contact Information</h2>
                    <p>
                        Join ABC! You’ll have access to members-only sections of the website which include searchable 
                        databases; articles on herbs from past issues of our journal, HerbalGram; news about cutting-edge 
                        research; critical reviews of important studies; careful evaluation of clinical trials; new trends 
                        in the herbal and natural products community; and much more.
                    </p>
                </div>
            </div>
            <div>
                <img src={ContactBanner2} className="banner-background" height="50%" width="100%"/>
                <div className="row pt-180">
                    <div className="col-4 bg-danger">
                        <h2 className="text-success">Address Information</h2>
                        <span className="text-white" ><i className=" fa text-success fa-address-card"></i>
                        68/75-79, Subba Road Avenue, Nungambakkam, Chennai, Tamil Nadu 600034</span><br/>
                        <span className="text-white" ><i className=" fa text-success fa-phone"></i>
                          044-353654</span><br/>
                          <span className="text-white" ><i className=" fa text-success fa-envelope-square"></i>
                          nutrient@gmail.com</span>
                    </div>
                </div>
            </div>
            <div id="map-container-google-1" className="z-depth-1-half map-container mb-5">
                <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                   allowfullscreen></iframe>
              </div>
              <div>
                  <h2 className="text-center">Submission Form</h2>
                  <h3 className="text-success" >Get Your Complementary Shake Today</h3>
                  <div className="row">
                    <div className="col-4">
                        <label>Name</label><br/>
                        <input type="text" className="col-12" placeholder="Name" />
                    </div>
                    <div className="col-4">
                        <label>Phone</label><br/>
                        <input type="text" className="col-12" placeholder="Phone" />
                    </div>
                    <div className="col-4">
                        <label>Email</label><br/>
                        <input type="email" className="col-12" placeholder="Email" />
                    </div>
                  </div>
                  <h3 className="text-success" >Get Your Complementary Shake Today</h3>
                  <div className="row">
                    <div className="col-4">
                        <label>Name</label><br/>
                        <input type="text" className="col-12" placeholder="Name" />
                    </div>
                    <div className="col-4">
                        <label>Phone</label><br/>
                        <input type="text" className="col-12" placeholder="Phone" />
                    </div>
                    <div className="col-4">
                        <label>Email</label><br/>
                        <input type="email" className="col-12" placeholder="Email" />
                    </div>
                    <div className="col-6">
                        <label>What are you goals?</label><br/>
                        <input type="email" className="col-12" placeholder="xxxxxxyyyzzz" />
                    </div>
                    <div className="col-6">
                        <label>how best to contact you?</label><br/>
                        <input type="email" className="col-12" placeholder="xxxxxxyyyzzz" />
                    </div>
                  </div>
                  <h3 className="text-success" >Intrested in Additional Income</h3>
                  <div className="row">
                    <div className="col-4">
                        <label>Name</label><br/>
                        <input type="text" className="col-12" placeholder="Name" />
                    </div>
                    <div className="col-4">
                        <label>Phone</label><br/>
                        <input type="text" className="col-12" placeholder="Phone" />
                    </div>
                    <div className="col-4">
                        <label>Email</label><br/>
                        <input type="email" className="col-12" placeholder="Email" />
                    </div>
                  </div>
                  <h3 className="text-success" >Make Your Own Shake at a Discount</h3>
                  <div className="row">
                    <div className="col-4">
                        <label>Name</label><br/>
                        <input type="text" className="col-12" placeholder="Name" />
                    </div>
                    <div className="col-4">
                        <label>Phone</label><br/>
                        <input type="text" className="col-12" placeholder="Phone" />
                    </div>
                    <div className="col-4">
                        <label>Email</label><br/>
                        <input type="email" className="col-12" placeholder="Email" />
                    </div>
                    <div className="col-12">
                        <label>message</label><br/>
                        <textarea type="email" className="col-12" placeholder="message" ></textarea>
                    </div>
                    <div className="col-5"></div><button className="btn btn-danger mt-3">Submit</button>
                  </div>
              </div>
        </div>
        <Footer />
        </>
    )
    
}

export default Contact;