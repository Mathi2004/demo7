import React from 'react';
import banner1 from './banner1.jpeg';
import banner2 from './banner2.jpg';
function BannerSection() {
  return (
    <section className="home" id="home">
    <section className="banner-container">
      <div className="banner" >
      <img src={banner1} alt="React Logo" />
        <div className="content" >
          <span>new arrivals</span>
          <h3>house plants</h3>
          <h3>plant big sale special offer</h3>
        </div>
      </div>
      <div className="banner">
        <img src={banner2} alt="" />
        <div className="content">
          <span>new arrivals</span>
          <h3>office plants</h3>
          <h3>plant big sale special offer</h3>
        </div>
      </div>
    </section>
    </section>
  );
}

export default BannerSection;
