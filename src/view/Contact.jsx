import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactBanner from "../image/contact-banner.jpg";
import ContactBanner2 from "../image/contact-banner-2.jpg";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit, errors,watch } = useForm();
  const onSubmit = data => console.log(data);
  const watchIntrest = watch("intrest");
  
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
          <div className="row">
            <div className="col-3"></div>

            <form className=" col-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">First Name</label>
                <div className="col-sm-10">
                  <input type="text" name="first_name" ref={register({ required: true, minLength: 3, maxLength: 20 })} className={`form-control  + ${errors && errors.first_name && "border-red"}`} placeholder="First Name" />
                  {errors && errors.first_name && <p className="text-danger"> First Name is required.</p>}
                </div>
              </div>
              <div className="form-group row">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Last Name</label>
                <div className="col-sm-10">
                  <input type="text" name="last_name" ref={register({ required: true, minLength: 3, maxLength: 20 })} className={`form-control  + ${errors && errors.last_name && "border-red"}`} placeholder="Last Name" />
                  {errors && errors.last_name && <p className="text-danger"> Last Name is required.</p>}
                </div>
              </div>
              <div className="form-group row">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input name="email" type="text" className={`form-control  ${errors && errors.email && "border-red"}`} ref={register({ required: true, pattern: {value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i} })} placeholder="Email" />
                  {errors && errors.email && <p className="text-danger"> Enter the Email correct Format.</p>}
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
                      <input ref={register({ required: true })} className="form-check-input" type="radio" name="gender" value="female" />
                      <label className="form-check-label" for="gridRadios2">
                        Female
                    </label>
                      {errors && errors.gender && <p className="text-danger"> Please select the Gender.</p>}
                    </div>

                  </div>
                </div>
              </fieldset>
              <div className="form-group row">
                <div className="col-sm-2">Intrest</div>
                <div className="col-sm-10">
                  
                    <select name="intrest" ref={register({ required: true })} className={`form-control  + ${errors && errors.intrest && "border-red"}`}>
                      <option value="">--- Select Intrest---</option>
                      <option value="playing">Playing</option>
                      <option value="reading">Reading</option>
                    </select>
                    {errors && errors.intrest && <p className="text-danger"> Select the Intrest.</p>}
                  
                </div>
              </div>
             {watchIntrest=='playing'&&<div className="form-group row">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Favorite Sport</label>
                <div className="col-sm-10">
                  <input name="favorite_sport" type="text" className={`form-control  ${errors && errors.favorite_sport && "border-red"}`} ref={register({ required: true, pattern: "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" })} placeholder="Favorite Sport" />
                  {errors && errors.favorite_sport && <p className="text-danger"> Favorite Book is Required.</p>}
                </div>
              </div>}
              {watchIntrest=='reading'&&<div className="form-group row">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Favorite Book</label>
                <div className="col-sm-10">
                  <input name="favorite_book" type="email" className={`form-control  ${errors && errors.favorite_book && "border-red"}`} ref={register({ required: true, pattern: "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" })} placeholder="Favorite Book" />
                  {errors && errors.favorite_book && <p className="text-danger"> Favorite Book is Required.</p>}
                </div>
              </div>}
              <div className="form-group row">
                <div className="col-sm-2">
                  <label for="exampleFormControlTextarea1">write about yourself</label></div>
                <div className="col-sm-10">    <textarea className={`form-control ${errors && errors.intrest && "border-red"}`} ref={register({ required: true })} name="yourself" id="exampleFormControlTextarea1" rows="3"></textarea>
                  {errors && errors.yourself && <p className="text-danger"> yourself is required.</p>}
                </div>
              </div>
              <div className="form-group row">
                <div className="col-5"></div>
                <div className="col-sm-2">
                  <button type="submit" className="btn btn-primary">Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )

}

export default Contact;