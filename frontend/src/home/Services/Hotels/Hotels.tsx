import { lazy } from "react";

const SalesContent = lazy(() => import("./SalesContent"));
const Locations = lazy(() => import("./Locations"));
const Room = lazy(() => import("./Room"));
const Information = lazy(() => import("./Information/Information"));

export default function ContentHome() {
  return (
    <main className="my-8">
      <div className="container mx-auto px-6">
        <SalesContent />
        <Locations />
        <Room />
        <Information />
      </div>
    </main>
  );
}
