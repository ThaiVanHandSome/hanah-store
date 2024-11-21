import React from "react";
import Image from "next/image";
import event1 from "../src/assets/event1.png";

const EventsBanner = () => {
  return (
    <section className="event-container">
      <div className="subtitle">
        <span>PROMOTIONS</span>
        <h2>Our Promotions Events</h2>
      </div>

      <div className="event-banner">
        <div className="event-banner-left">
          <div className="event-card">
            <div className="content">
              <h3>
                GET UP TO <span>60%</span>
              </h3>
              <p>For the summer season</p>
            </div>
            <Image src={event1} alt="event" />
          </div>

          <div className="event-card">
            <h3>GET 30% Off</h3>
            <p>USE PROMO CODE</p>
            <button>DINEWEEKENDSALE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsBanner;
