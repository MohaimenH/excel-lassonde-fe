import { BiTime } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { DateTime } from "luxon";

const EventCard = ({ title, description, date_start, location, imageURL }) => {
  return (
    <div className="h-[28rem] max-w-3xl pb-3 shadow-2xl rounded-lg bg-slate-200">
      <div className="text-center">
        <img
          src={imageURL}
          className="object-cover max-w-sm h-72 rounded my-0 mx-0 shadow-md mb-2"
          alt="People meeting in room"
        />

        <span className="text-2xl font-bolds">{title}</span>

        <p className="max-w-sm  p-2">{`${description.slice(0, 120)}...`}</p>

        <div className="flex flex-row justify-between mb-0 pb-0 align-bottom">
          <div className="flex flex-row mx-4 pt-1 my-0">
            <BiTime className="mt-1 mr-1" />

            <div>
              {DateTime.fromISO(date_start).setZone("utc").toLocaleString({
                month: "short",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
          <div className="flex flex-row mx-4 pt-1 my-0">
            {location} <GoLocation className="mt-1 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
