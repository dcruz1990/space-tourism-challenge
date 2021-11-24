import Navbar from "../components/Navbar/Navbar";

const Destination = () => {
  return (
    <div className="w-full h-screen bg-destinationMobileBackground md:bg-destinationTabletBackground lg:bg-destinationDesktopBackground  bg-cover">
      <div className="py-10 px-20">
        <Navbar />
      </div>
    </div>
  );
};

export default Destination;
