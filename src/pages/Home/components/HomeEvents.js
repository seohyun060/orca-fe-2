import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/home.styles.scss";
import images from "src/assets/images";
import EventCard from "../../Events/components/EventCard";

const HomeEvents = () => {
  const navigate = useNavigate();
  const [currentEventSlide, setCurrentEventSlide] = useState(0);
  const [eventSlideMoving, setEventSlideMoving] = useState(0);
  const eventSlideRef = useRef();
  const totalSides = 3;

  const onBackButtonClick = () => {
    if (currentEventSlide <= 0) {
      return;
    } else {
      setEventSlideMoving(eventSlideMoving + 456);
      setCurrentEventSlide(currentEventSlide - 1);
      eventSlideRef.current.style.transform = `translateX(${
        eventSlideMoving + 456
      }px)`;
    }
  };
  const onGoButtonClick = () => {
    if (currentEventSlide >= totalSides) {
      return;
    } else {
      setEventSlideMoving(eventSlideMoving - 456);
      setCurrentEventSlide(currentEventSlide + 1);
      eventSlideRef.current.style.transform = `translateX(${
        eventSlideMoving - 456
      }px)`;
    }
  };

  return (
    <section className="Section">
      <div className="SectionTitle">
        <label>Events</label>
        <button className="ViewButton" onClick={() => navigate("/events")}>
          <label className="View">View All</label>
        </button>
      </div>
      <div className="EventBox">
        <div className="EventBoxSlide"ref={eventSlideRef}>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
        <div className="EventCardPaging">
          <img src={images.back_b} onClick={onBackButtonClick}></img>
          <img src={images.paging_bar}></img>
          <img src={images.go_b} onClick={onGoButtonClick}></img>
        </div>
      </div>
    </section>
  );
};

export default HomeEvents;
