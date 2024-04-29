import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";

function Home() {
  return (
    <div className="home">
      <Featured />

      <div className="explore">
        <div className="container">
          <h1>Most Popular Categories</h1>
          <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
        </div>
      </div>

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              Event Service Hub
            </h1>
            <h1>
              A platform to connect event host to service providers
            </h1>
            <p>
              Explore  the world of events and find a reliable provider for your needs.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to service providers with proven professionlism
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect service providers for your event
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
            Secure transaction           
             </div>
            <button>Explore Vendors</button>
          </div>
          <div className="item">
            <img
              src="https://24slides.com/templates/assets/templates-previews/YzPIFyGMB539SVE8ZaA9m5hDySqBuaufsQAlAtB6.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
