import { Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

export const App = () => {
  return (
    <div className="w-full h-screen bg-mobileBackground md:bg-tabletBackground lg:bg-desktopBackground  bg-cover">
      <div className="py-10 px-20">
        <Navbar />
      </div>

      <div className="w-full mt-40 lg:mt-96 flex flex-col lg:flex-row justify-evenly items-center">
        <div className="">
          <h3 className="uppercase font-barlot text-heading5 text-secondary leading-35 tracking-widest">
            So, you want to travel to space
          </h3>
          <h1 className="uppercase text-heading1 font-bellefair my-20 ">
            space
          </h1>
          <p
            style={{
              width: "450px",
            }}
            className="text-secondary text-bodyText font-bellefair subheaderHome leading-7 text-justify "
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div id="buttonContainer ">
          <Link
            to="destination"
            className="rounded-full bg-ffffff h-60 w-60 flex justify-center items-center text-gray-700 uppercase font-bold text-3xl border-8 border-solid hover:shadow-2xl cursor-pointer tracking-widest"
          >
            explore
          </Link>
        </div>
      </div>
    </div>
  );
};
