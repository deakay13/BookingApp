import SalesContent from "./SalesContent";
import Locations from "./Locations";
import Room from "./Room";
import Information from "./Information/Information";

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
