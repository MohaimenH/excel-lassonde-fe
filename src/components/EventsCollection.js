import axios from "axios";
import { useState, useEffect } from "react";

import EventCard from "./EventCard";

const EventsCollection = (props) => {
  const [events, setEvents] = useState([
    { title: "", description: "", date_start: "", location: "", imgUrl: "" },
  ]);

  useEffect(() => {
    axios.get("https://excellassonde.xyz/events").then((res) => {
      setEvents(res.data);
    });
  }, []);

  return (
    <ul className="flex flex-row justify">
      {events.map((e, index) => (
        <li key={index} className="m-5">
          <EventCard {...e} />
        </li>
      ))}
    </ul>
  );
};

export default EventsCollection;
