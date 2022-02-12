import axios from "axios";
import { useState, useEffect } from "react";

import EventCard from "./EventCard";

const EventsCollection = (props) => {
  const [events, setEvents] = useState([
    { title: "", description: "", date_start: "", location: "", imgUrl: "" },
  ]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get("https://excellassonde.xyz/events").then((res) => {
      setEvents(res.data);
      setLoading(true);
    });
  }, []);

  return (
    <>
      {loading ? (
        <ul className="flex flex-row justify">
          {events.map((e, index) => (
            <li key={index} className="m-5">
              <EventCard {...e} />
            </li>
          ))}
        </ul>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default EventsCollection;
