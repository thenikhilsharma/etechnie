import React from "react";
import "./EventCard.css";

const EventCard = () => {
  return (
    <div className="event-card">
      {/* Event Image */}
      <div className="event-image">
        <img
          src="https://via.placeholder.com/400x250" // Replace with your event image URL
          alt="Camping Trip"
        />
        <div className="event-date">
          <span className="month">FEB</span>
          <span className="day">28</span>
        </div>
        <div className="event-category">Trip / Camp</div>
      </div>

      {/* Event Details */}
      <div className="event-details">
        <h3 className="event-title">Camping Trip</h3>
        <p className="event-location">
          ATLANTIQUE PARC: Les Mathes, France
        </p>
        <p className="event-time">Fri 28 Feb 2025, 1:00 PM EST</p>
        <div className="event-footer">
          <span className="event-price">$110</span>
          <button className="event-favorite">
            <i className="fa fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;