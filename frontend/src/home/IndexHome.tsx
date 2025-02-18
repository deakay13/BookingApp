import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

import HeaderHome from "./Component/HeaderHome";
import FooterHome from "./Component/FooterHome";
import Spinner from "../spinner";

const Hotels = lazy(() => import("./Services/Hotels/Hotels"));
const Flights = lazy(() => import("./Services/Flights"));
const BusAndShuttle = lazy(() => import("./Services/Bus&Shuttle"));
const CarRental = lazy(() => import("./Services/CarRental"));
const AirportTransfer = lazy(() => import("./Services/AirportTransfer"));
const About = lazy(() => import("./Services/About/About"));
const SignIn = lazy(() => import("../Auth/SignIn"));
const SignUp = lazy(() => import("../Auth/SignUp"));

export default function IndexHome() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500">
      <HeaderHome />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route index element={<Hotels />} />
          <Route path="/Hotels" element={<Hotels />} />
          <Route path="/Flights" element={<Flights />} />
          <Route path="/Bus&Shuttle" element={<BusAndShuttle />} />
          <Route path="/CarRental" element={<CarRental />} />
          <Route path="/AirportTransfer" element={<AirportTransfer />} />
          <Route path="/About" element={<About />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <FooterHome />
    </div>
  );
}
