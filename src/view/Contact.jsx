import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactBanner from "../image/contact-banner.jpg"
import ContactBanner2 from "../image/contact-banner-2.jpg"
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit,errors } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
      <Header />
      <div className="container-fluid" >
        <div>
          <img src={ContactBanner} className="banner-background" height="50%" width="100%" />
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
          <img src={ContactBanner2} className="banner-background" height="50%" width="100%" />
          <div className="row pt-180">
            <div className="col-4 bg-danger">
              <h2 className="text-success">Address Information</h2>
              <span className="text-white" ><i className=" fa text-success fa-address-card"></i>
                        68/75-79, Subba Road Avenue, Nungambakkam, Chennai, Tamil Nadu 600034</span><br />
              <span className="text-white" ><i className=" fa text-success fa-phone"></i>
                          044-353654</span><br />
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">First Name</label>
              <div className="col-sm-10">
                <input type="text" name="first_name" ref={register({ required: true,minLength:3, maxLength: 20 })} className={"form-control "} placeholder="First Name" />
                {errors&&errors.first_name&&<p className="text-danger"> First Name is required.</p>}
              </div>
            </div>
            <div className="form-group row">
              <label for="inputEmail3" className="col-sm-2 col-form-label">Last Name</label>
              <div className="col-sm-10">
                <input type="text" name="last_name" ref={register({ required: true,minLength:3, maxLength: 20 })} className="form-control" placeholder="Last Name" />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input name="email" type="email" ref={register({ required: true})} className="form-control" placeholder="Email" />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" name="password"  ref={register} className="form-control" id="inputPassword3" placeholder="Password" />
              </div>
            </div>
            <fieldset className="form-group">
              <div className="row">
                <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input ref={register({ required: true })} className="form-check-input" type="radio" name="gender" value="male" checked />
                    <label className="form-check-label" for="gridRadios1">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input ref={register({ required: true })} className="form-check-input" type="radio" name="gender"  value="female" />
                    <label className="form-check-label" for="gridRadios2">
                      Female
                    </label>
                  </div>
                 
                </div>
              </div>
            </fieldset>
            <div className="form-group row">
              <div className="col-sm-2">Intrest</div>
              <div className="col-sm-10">
                <div className="form-check">
                  <select name="intrest" ref={register ({ required: true })} className="form-control">
                    <option value="">--- Select Intrest---</option>
                    <option value ="playing">Playing</option>
                    <option value ="reading">Reading</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">Sign in</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )

}

export default Contact;