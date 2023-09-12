import React, { useRef } from "react";

// import { ReactComponent as pagingBar } from 'src/assets/images/paging_bar';
import "./style/events.css";
import images from "src/assets/images";
import EventCard from "./components/EventCard";

const EventsPage = (props) => {
 
  const onBackButtonClick = () => {};
  const onGoButtonClick = () => {};

  return (
    <div className="Events">
      <section className="Section">
        <div className="SectionTitle">Events</div>
        <div className="SubPhrase">
          Learn about ORCA's upcoming events for potential meet-ups
        </div>
        <div className="EventBox">
          <EventCard inEvent={true} />
          <EventCard inEvent={true} />
          <EventCard inEvent={true} />
          <EventCard inEvent={true} />
        </div>
        <div className="EventCardPaging">
          <img src={images.back_b}></img>
          <img src={images.paging_bar}></img>
          <img src={images.go_b}></img>
        </div>
      </section>
      <section className="Section">
        <div className="SectionTitle">Past Events</div>
        <div className="SubPhrase">Take a glimpse into ORCA's past events.</div>
        <div className="EventBox__past">
          <EventCard past={true} inEvent={true} />
          <EventCard past={true} inEvent={true} />
          <EventCard past={true} inEvent={true} />
          <EventCard past={true} inEvent={true} />
          <EventCard past={true} inEvent={true} />
          <EventCard past={true} inEvent={true} />
        </div>
        <div className="ButtonArrange">
          <button className="LeadMoreButton">
            <label>Read More</label>
          </button>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
