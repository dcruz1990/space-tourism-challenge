import Navbar from "../components/Navbar/Navbar";

const Crew = () => {
  return (
    <div className="w-full h-screen bg-crewMobileBackground md:bg-crewTabletBackground lg:bg-crewDesktopBackground  bg-cover">
      <div className="py-10 px-20">
        <Navbar />
      </div>
    </div>
  );
};

export default Crew;
