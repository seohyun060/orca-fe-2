import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/home.styles.scss";
import { useTranslation } from "react-i18next";
import images from "src/assets/images";
import EventCard from "../../Events/components/EventCard";
import EventBoxSlide from "src/pages/Events/components/EventBoxSlide";

const HomeEvents = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="Section">
      <div className="SectionTitle">
        <label>{t("events")}</label>
        <button className="ViewButton" onClick={() => navigate("/events")}>
          <label className="View">{t("view_all")}</label>
        </button>
      </div>
      <EventBoxSlide inEvent={false}/>
    </section>
  );
};

export default HomeEvents;
