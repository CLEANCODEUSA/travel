import React from 'react'
import './home.scss'

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src="" muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallTexst">
            Our Packages
          </span>
          <h1 className="homeTitle">
            Search your Holiday
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Home