import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";

function Gig() {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs"> Photography</span>
          <h1></h1>
          <div className="user">
            <img
              className="pp"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>Peculiar Photography</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </Slider>
          <h2>About Us</h2>
          <p>
          Welcome to Peculiar Photography, where every click tells a story! We're thrilled to unveil our exceptional photography services, designed to transform your precious moments into timeless treasures.
           From weddings to family portraits, corporate events to product shoots, our team of talented photographers is dedicated to capturing the essence of every moment with precision and artistry. Step into a world of creativity and professionalism, where your memories are transformed into breathtaking visual narratives.
           Join us at Peculiar Photography, and let's craft unforgettable moments together!
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info">
                <span>Anna Bell</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">Oyo State</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Jan 2024</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">1 hour</span>
                </div>
                <div className="item">
                  <span className="title">No of jobs delivered</span>
                  <span className="desc">20</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English, Yoruba</span>

                </div>
              </div>
              <hr />
              <p>
              At Peculiar Photography,every click tells a story! 
              We're thrilled to unveil our exceptional photography services, designed to transform your precious moments into timeless treasures. From weddings to family portraits, corporate events to product shoots,
               our team of talented photographers is dedicated to capturing the essence of every moment with precision and artistry. Step into a world of creativity and professionalism,
                where your memories are transformed into breathtaking visual narratives. Join us at Peculiar, and let's craft unforgettable moments together!"
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <div className="info">
                  <span>Adetoun David</span>
                  <div className="country">
                    <span>Osun </span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
              At Peculiar Photography,every click tells a story! 
              We're thrilled to unveil our exceptional photography services, designed to transform your precious moments into timeless treasures. From weddings to family portraits, corporate events to product shoots,
               our team of talented photographers is dedicated to capturing the essence of every moment with precision and artistry. Step into a world of creativity and professionalism,
                where your memories are transformed into breathtaking visual narratives. Join us at Peculiar, and let's craft unforgettable moments together!"
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <div className="info">
                  <span>Gbenga Daniel</span>
                  <div className="country">
                    <span>Lagos</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
              "Working with Peculiar was an absolute delight! Their team of photographers not only captured every moment beautifully but also made the entire process seamless and enjoyable. From the initial consultation to the final delivery, they exhibited professionalism and creativity, ensuring that every shot reflected our vision perfectly. Our photos turned out even better than we could have imagined, and we couldn't be happier with the results. Peculiar truly exceeded our expectations, and we highly recommend their services to anyone looking for top-notch photography expertise!"
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <div className="info">
                  <span>Adeyinka Segun </span>
                  <div className="country">
              
                    <span>Ibadan</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Amazing work! Communication was
                amazing. I absolutely recommend this team, and know already that Ill be using them again
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gig;
