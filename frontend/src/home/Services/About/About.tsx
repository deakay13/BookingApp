export default function About() {
  return (
    <div className="flex flex-col">
      <div className="w-full bg-gray-500 bg-cover bg-center items-center ">
        <div>About Us</div>
        <div className="h-full bg-white rounded-t-[35px]">
          <div className=" mx-20 pt-20 grid gap-6 grid-cols-2">
            <div className="w-[500px] h-[330px] rounded-xl bg-slate-600"> </div>
            <div className="text-center"> kiểm tra code lần cuối</div>
            <div className="text-center"> test left</div>
            <div className="w-[500px] h-[330px] rounded-xl bg-slate-600"></div>
          </div>
          <div className="flex flex-col mx-20">
            <div> Product</div>
            <div className="flex my-3 space-x-5">
              <div className="group space-y-3 w-[300px] h-[300px] bg-white rounded-xl outline outline-slate-200 outline-[0.5px] hover:bg-[url('/assets/flight.jpg')] bg-non-repeat bg-cover bg-center">
                <div className="mx-4 mt-10 text-xl"> Flight</div>
                <div className="mx-4 mt-5 group-hover:text-white text-xl font-bold">
                  Flight
                </div>
                <div className="mx-4 mt-5 group-hover:text-white text-3xl font-bold">
                  300+
                </div>
                <div className="mx-4 mt-5 group-hover:text-white text-2xl">
                  Full services carries & low cost carries
                </div>
              </div>
              <div className="group space-y-3 w-[300px] h-[300px] bg-white rounded-xl outline outline-slate-200 outline-[0.5px] hover:bg-[url('/assets/Rooms.jpg')] bg-center bg-cover">
                <div className="mx-4 mt-10 text-xl font-bold"> Flight</div>
                <div className="mx-4 mt-5 group-hover:text-white text-xl font-bold">
                  Accommodation
                </div>
                <div className="mx-4 mt-5 group-hover:text-white text-3xl font-bold">
                  2.2M+
                </div>
                <div className="mx-4 group-hover:text-white mt-5 text-2xl">
                  Hotels, Apartment, Resort & Villas in over 100 countries
                </div>
              </div>
              <div className="group space-y- w-[300px] h-[300px] bg-white rounded-xl outline outline-slate-200 outline-[0.5px] hover:bg-[url('/assets/congvien.png')] bg-center bg-cover">
                <div className="mx-4 mt-10 text-xl font-bold"> Flight</div>
                <div className="mx-4 mt-5 group-hover:text-white text-xl font-bold">
                  Travels activities
                </div>
                <div className="mx-4 mt-5 group-hover:text-white text-3xl font-bold">
                  60K+
                </div>
                <div className="mx-4 mt-5 group-hover:text-white text-2xl">
                  Locations in over 100 countries
                </div>
              </div>
              <div className="space-y-3 w-[300px] h-[300px] bg-white rounded-xl outline outline-slate-200 outline-[0.5px]">
                <div className="mx-4 mt-10 text-xl font-bold"> Flight</div>
                <div className="mx-4 mt-5 text-xl font-bold">
                  {" "}
                  Car Rentals & Airport Transfers{" "}
                </div>
                <div className="mx-4 mt-5 text-3xl font-bold"> 600+ </div>
                <div className="mx-4 mt-5 text-2xl">
                  Providers in over 20 countries
                </div>
              </div>
            </div>
          </div>
          <div className="flex"></div>
          <div className="flex"></div>
          <div className="flex"></div>
        </div>
      </div>
    </div>
  );
}
