import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { IPlanet } from "../interfaces";

const Destination = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios.get("/data.json").then((res) => {
      setDestinations(res.data.destinations);
    });
  }, []);

  console.log(destinations);

  return (
    <div className="w-full h-screen bg-destinationMobileBackground md:bg-destinationTabletBackground lg:bg-destinationDesktopBackground  bg-cover">
      <div className="py-10 px-20">
        <Navbar />
      </div>
      <div
        id="titleContainer"
        style={{
          letterSpacing: "3.375px",
          fontSize: "28px",
        }}
        className="flex justify-start uppercase font-barlot text-ffffff mt-40 ml-40"
      >
        <b className="mr-5 text-gray-700">01</b> <p>Pick your destination</p>
      </div>
      <div id="planetContainer" className="flex justify-center space-x-5 mt-20">
        <div>Planet image</div>
        <div className="flex space-x-10 uppercase">
          {destinations &&
            destinations.length > 0 &&
            destinations.map((planet: IPlanet) => {
              return <p>{planet.name}</p>;
            })}
        </div>
      </div>
    </div>
  );
};

export default Destination;
