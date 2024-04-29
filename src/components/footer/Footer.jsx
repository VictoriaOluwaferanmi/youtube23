import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Photography</span>
            <span>Wedding Dress</span>
            <span>Graphics Design</span>
            <span>Videography</span>
            <span>Music</span>
            <span>Cakes</span>
            <span>Hotels</span>
            <span>Fashion Designers</span>
            <span>Events</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Mission</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Investor Relations</span>
            <span>Contact </span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Liverr</span>
            <span>Buying on Liverr</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Influencers</span>
            <span>Invite a Friend</span>
            <span>Become a Service Provider</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>Event and Services</h2>
            <span>Service Providers</span>
            <span>Event Organizers</span>
            <span>Budgetting</span>
            <span>Event Space</span>
            <span>Network</span>
            <span>Working Not Working</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <span>© Event Service Hub. 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
