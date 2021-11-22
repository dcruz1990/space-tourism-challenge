import React from "react";
import Navbar from "./components/Navbar/Navbar";

export const App = () => {
  return (
    <div>
      <Navbar />
      <div className="w-9/12 mt-96 flex">
        <div className="ml-auto">
          <h3 className="uppercase font-barlot text-heading5 text-secondary leading-35 tracking-widest">
            So, you want to travel to space
          </h3>
          <h1 className="uppercase text-heading1 font-bellefair my-20 ">
            space
          </h1>
          <p className="w-96 text-secondary text-bodyText font-bellefair subheaderHome tracking-widest ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div id="button"></div>
      </div>
    </div>
  );
};
