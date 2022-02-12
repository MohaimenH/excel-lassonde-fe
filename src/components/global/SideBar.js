import { BiTime } from "react-icons/bi";
import {
  BsCalendar2Plus,
  BsCalendar2Week,
  BsGearWide,
  BsInfoCircle,
} from "react-icons/bs";

import { RiUserSettingsLine } from "react-icons/ri";

import "animate.css";

const SideBar = ({ type }) => {
  let sideBarType = <SideBarStudent />;

  if (type === "tutor") {
    sideBarType = <SideBarTutor />;
  } else if (type === "admin") {
    sideBarType = <SideBarAdmin />;
  }

  return (
    <div
      className="z-50 rounded-b-xl w-screen h-16 m-0 flex flex-row justify-between
    md:rounded-none md:rounded-tr-md md:h-screen md:w-20 md:flex-col md:justify-start
    fixed top-0 left-0 align-center bg-excel-black shadow-2xl text-white"
    >
      <HomeButton />
      {sideBarType}
    </div>
  );
};

const HomeButton = () => {
  return (
    <button
      className="m-3 flex group transition opacity-100 animate__animated animate__fadeInLeft
    md:animate__fadeInDown"
    >
      <img
        src="excelIcon.png"
        alt="Excel Lassonde Logo"
        className="w-10 h-10 hover:scale-110 active:brightness-110 transition-all duration-400 ease-in md:w-12 md:h-12 md:ml-1"
      />
      <span className="sidebar-tooltip group-hover:opacity-100 group-hover:visible">
        Home
      </span>
    </button>
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
      <SideBarIcon icon={<BsGearWide size={24} />} text="Profile & Settings" />
    </>
  );
};

const SideBarTutor = () => {
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
        icon={<RiUserSettingsLine size={24} />}
        text="Profile & Settings"
      />
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
