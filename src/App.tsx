import Navbar from "./components/Navbar/Navbar";

export const App = () => {
  return (
    <div className="w-full h-screen bg-mobileBackground md:bg-tabletBackground lg:bg-desktopBackground  bg-cover">
      <div className="py-10 px-20">
        <Navbar />
      </div>

      <div className="w-9/12 mt-96 flex justify-between">
        <div className="ml-10">
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
        <div
          id="button"
          className="bg-gray-100 rounded-full w-80 h-80 flex items-center justify-center cursor-pointer  "
        >
          <div
            id="button"
            className="bg-ffffff   cursor-pointer hover:border-white border-2 hover:border-8 rounded-full w-60 h-60 absolute flex justify-center items-center hover:shadow-2xl"
          >
            <p className="bottom-2 left-0 text-black text-heading5 uppercase">
              Explore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
