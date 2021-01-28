import Header from "../components/Header";
import Footer from "../components/Footer"
import logo from "../image/download.jpg"
import product1 from '../image/product1.jpg'

import Caurosel from '../components/Caurosel'
import banner2 from '../image/banner2.jpg'
import LatestPost from '../components/LatestPost'
import Heading from '../components/Heading'
import gallary from '../image/gallary.jpg'
import axios from 'axios'
import Banner from "../components/Banner";
import About from '../components/About';
import { useState, useEffect } from 'react';
function Home() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {

        setPosts(res.data)
      })
  }, [])

  return (
    <div>
      <Header />
      <div className="container-fluid ">
        <Banner img={logo} imgClass="banner-background" contentClass="ht-300" >
        <div className="col-4 banner-detail-1" >
              <h4>Welcome to</h4>
              <h2>using the art of herps</h2>
              <button className="button1" >Contuct Us</button>
            </div>
            <div className="col-5 banner-detail-2" >
              <img src={product1} height="40%" width="90%" />
            </div>
          </Banner>
        
        <About />
        <Caurosel heading="future Product" />
        <Banner img={banner2} imgClass="pos-abs" contentClass="banner2-detail" >
        <div className="col-4 "  >
              <Heading text="Our Story" />
              
              <p>Once he fully understood the science behind this special botanical, Mr. Manal bought
              a hand-operated, tablet-compressing machine and began his work. At night, his shoulders
                       would ache from producing a few hundred tablets, one small tablet at a time.</p>
              <button className="button2" >Contuct Us</button>
            </div>
            <div className="col-5 banner-detail-2" >
              <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" height="80%" width="90%" ></iframe>
            </div>
        </Banner>
        
        <Caurosel heading="Most Selling Product" />
        <div className="my-3">
          <Heading text='Our Gallary' />
          <img src={gallary} width="100%" height="60%" />
        </div>

        {posts && posts.length && <LatestPost posts={posts} />}
      </div>
      <Footer />
    </div>
  )
}
export default Home;