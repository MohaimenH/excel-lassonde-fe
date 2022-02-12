import { BiTime } from "react-icons/bi";
import {
  BsCalendar2Plus,
  BsCalendar2Week,
  BsGearWide,
  BsInfoCircle,
} from "react-icons/bs";

const SideBar = ({ type }) => {
  let sideBarType = <SideBarStudent />;

  if (type === "tutor") {
    sideBarType = <SideBarTutor />;
  } else if (type === "admin") {
    sideBarType = <SideBarAdmin />;
  }

  return (
    <div className="rounded-tr-1xl fixed top-0 left-0 pt-1 h-screen w-20 m-0 flex flex-col align-center bg-excel-black shadow-2xl text-white">
      <button className="m-3 flex group">
        <img
          src="excelIcon.png"
          alt="Excel Lassonde Logo"
          className="hover:scale-110 active:brightness-110 transition-all duration-400 ease-in"
        />
        <span className="sidebar-tooltip ml-5 group-hover:opacity-100 group-hover:visible">
          Home
        </span>
      </button>
      {sideBarType}
    </div>
  );
};

const SideBarStudent = () => {
  return (
    <>
      <SideBarIcon
        icon={<BsCalendar2Plus size={24} />}
        text="Book Tutoring Session"
      />
      <SideBarIcon
        icon={<BsCalendar2Week size={24} />}
        text="View Past & Upcoming Bookings"
      />
      <SideBarIcon
        icon={<BsInfoCircle size={24} />}
        text="About Excel Lassonde"
      />
      <SideBarIcon
        icon={<BsGearWide size={24} title="Settings" />}
        text="Settings"
      />
    </>
  );
};

const SideBarTutor = () => {
  return (
    <>
      <SideBarIcon icon={<BiTime size={28} />} />
      <SideBarIcon icon={<BiTime size={28} />} />
    </>
  );
};

const SideBarAdmin = () => {
  return (
    <>
      <SideBarIcon icon={<BiTime size={28} />} />
      <SideBarIcon icon={<BiTime size={28} />} />
    </>
  );
};

const SideBarIcon = ({ icon, text }) => {
  return (
    <button className="sidebar-icon group" title={text}>
      {icon}
      <span className="sidebar-tooltip group-hover:opacity-100 group-hover:visible">
        {text}
      </span>
    </button>
  );
};

export default SideBar;
