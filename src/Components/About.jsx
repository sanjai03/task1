import leaf from '../image/leaf.jpg'
function About(){
    return(
        <div className="row my-3" >
          <div className="col-1"></div>
          <div className="col-5">
            <h4 className="text-success">About Us</h4>
            <p>
              Herbalife Nutrition is a global nutrition company whose purpose is to make the world
              healthier and happier. The Company has been on a mission for nutrition - changing people's
              lives with great nutrition products and programs - since 1980.
                  </p>
            <p>
              The Herbalife diet is pricey and involves highly processed shakes and many supplements,
              some of which have been linked to negative health effects. Short-term use likely causes
              weight loss, but long-term effectiveness is yet to be studied.
                  </p>

          </div>
          <div className="col-4">
            <img src={leaf} height="100%" width="100%" />
          </div>
        </div>
    )
}
export default About