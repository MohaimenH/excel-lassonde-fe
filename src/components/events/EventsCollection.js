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
        <section className="rounded-3xl bg-excel-light-purple shadow-[0_0px_40px_-15px_rgba(0,0,0,0.3)]">
          <h2 className="text-3xl mt-3 mx-5 text-black">Upcoming Events</h2>
          <ul className="flex flex-row justify">
            {events.map((e, index) => (
              <li key={index} className="m-5">
                <EventCard {...e} />
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default EventsCollection;
