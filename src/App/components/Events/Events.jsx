import React from "react";
import "./Events.css";

const Events = () => {
  return (
    <div className="Events">
      <div className="Events-title">Upcoming Events</div>
      <ul className="Events-ul">
        <li>
          Abhishekam will be performed on the names of devotees who send DD or
          moneyorder to devastanam
        </li>
        <li>Large No. of devotees will visit this temple on Sanithrayodasi</li>
        <li>
          Kalyanam of Sri Swamivaru (Magha Bahula Ekhadasi) (February/March
          every year).
        </li>
        <li>
          Devi Navaratrulu (Aswayuja Masam Nine days) (September/October every
          year).
        </li>
        <li>Karthika Masam (November/December every year).</li>
        <li>
          Lakshapatri Puja (Karthika Masam) (November/December every year).
        </li>
        <li>Sani Trayodasi Festivals.</li>
      </ul>
    </div>
  );
};

export default Events;
