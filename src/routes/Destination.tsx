import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { IPlanet } from "../interfaces";

const Destination = () => {
  const [destinations, setDestinations] = useState<IPlanet[]>([]);
  const [activeDestination, setActiveDestination] = useState<number>(0);

  useEffect(() => {
    axios.get("/data.json").then((res) => {
      setDestinations(res.data.destinations);
    });
  }, []);

  const resolveActiveDestinationIndex = (name: string) => {
    let index = destinations.findIndex((planet) => planet.name === name);
    setActiveDestination(index);
  };

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
        <div>
          <img
            className="mr-10 md:mr-40"
            src={destinations[activeDestination]?.images.png}
            alt={destinations[activeDestination]?.name}
            title={destinations[activeDestination]?.name}
          />
        </div>
        <div className="flex space-x-10">
          <div className="planetsNamesContainer">
            {destinations &&
              destinations.length > 0 &&
              destinations.map((planet: IPlanet) => {
                return (
                  <span
                    onClick={() => resolveActiveDestinationIndex(planet.name)}
                    key={planet.name}
                    className={`h-16  p-5 uppercase border-opacity-0 hover:border-secondary hover:border-opacity-100 border-b-2 text-menuElement cursor-pointer ${
                      destinations[activeDestination]?.name === planet.name
                        ? `border-b-4 border-opacity-100 border-ffffff`
                        : false
                    }  `}
                  >
                    {planet.name}
                  </span>
                );
              })}
            <div
              style={{
                fontSize: "100px",
              }}
              id="planetInfo"
              className="mt-10 flex justify-center text-6xl uppercase"
            >
              {destinations[activeDestination]?.name}
            </div>
            <div
              style={{
                fontSize: "18px",
                lineHeight: "32px",
                fontWeight: "normal",
                color: "#D0D6F9",
              }}
              className="w-96 mt-5 text-justify font-barlot"
            >
              {destinations[activeDestination]?.description}
            </div>
            <hr className="mt-10" />
            <div className="flex justify-center space-x-10 mt-10 uppercase">
              <div className="">
                <p className="text-secondary flex justify-center">
                  Avg. Distance
                </p>
                <div className="flex justify-center text-4xl">
                  {destinations[activeDestination]?.distance}
                </div>
              </div>
              <div className="">
                <p className="text-secondary flex justify-center">
                  Est. Travel Time
                </p>
                <div className="flex justify-center text-4xl">
                  {destinations[activeDestination]?.travel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
