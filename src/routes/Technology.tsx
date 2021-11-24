import Navbar from "../components/Navbar/Navbar";

const Technology = () => {
  return (
    <div className="w-full h-screen bg-technologyMobileBackground md:bg-technologyTabletBackground lg:bg-technologyDesktopBackground  bg-cover">
      <div className="py-10 px-20">
        <Navbar />
      </div>
    </div>
  );
};

export default Technology;
