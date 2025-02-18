import { useState } from "react";
import TopFlights from "./TopFlights";
import TopHotels from "./TopHotels";
import TopActivities from "./TopActivities";

export default function Information() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["The top Flights", "The top Hotels", "the top Activities"];

  const content = [<TopFlights />, <TopHotels />, <TopActivities />];

  return (
    <div className="container mx-auto p-4">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === index
                ? "border-b-2 border-black text-white"
                : "text-white hover:text-gray-500 bg-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">{content[activeTab]}</div>
    </div>
  );
}
