import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const DashBoard = lazy(() => import("./DashBoard"));
const TabUsers = lazy(() => import("./ManagementUsers/Users/TabUsers"));
const Roles = lazy(() => import("./ManagementUsers/Roles/Roles"));
const About = lazy(() => import("./About"));
const Profiles = lazy(() => import("./Profiles"));
const AirportTransfers = lazy(() => import("./ManagementServices/AirportTransfers"));
const BusAndShuttles = lazy(() => import("./ManagementServices/Bus&Shuttle"));
const CarRental = lazy(() => import("./ManagementServices/CarRental"));
const Flights = lazy(() => import("./ManagementServices/Flights"));
const Hotels = lazy(() => import("./ManagementServices/Hotels"));
const Rooms = lazy(() => import("./ManagementServices/Rooms"));

export default function IndexFunctions() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/DashBoard" element={<DashBoard />} />
      <Route path="/TabUsers" element={<TabUsers />} />
      <Route path="/Roles" element={<Roles />} />
      <Route path="/About" element={<About />} />
      <Route path="/Profiles" element={<Profiles />} />
      <Route path="/AirportTransfers" element={<AirportTransfers />} />
      <Route path="/Bus&Shuttle" element={<BusAndShuttles />} />
      <Route path="/CarRental" element={<CarRental />} />
      <Route path="/Flights" element={<Flights />} />
      <Route path="/Hotels" element={<Hotels />} />
      <Route path="/Rooms" element={<Rooms />} />
    </Routes>
  );
}
