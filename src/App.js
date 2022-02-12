import "./App.css";
import SideBar from "./components/global/SideBar";
import EventsCollection from "./components/events/EventsCollection";
import Hero from "./components/global/Hero";
import { useState } from "react";

function App() {
  return (
    <div className="flex flex-row bg-white h-screen justify-center">
      <SideBar type={"tutor"} />
      <div className="min-w-full">
        <Hero />
        <h1 className="ml-20">Something</h1>
      </div>
    </div>
  );
}

export default App;
