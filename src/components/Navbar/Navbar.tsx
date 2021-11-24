import logo from "../../assets/shared/logo.svg";
import Spacer from "../common/Spacer";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  const items = [
    {
      position: "00",
      title: "Home",
      link: "/",
    },
    {
      position: "01",
      title: "Destination",
      link: "/destination",
    },
    {
      position: "02",
      title: "Crew",
      link: "/crew",
    },
    {
      position: "03",
      title: "Teechnology",
      link: "/technology",
    },
  ];

  return (
    <div className=" flex justify-end items-center backdrop-filter backdrop-blur-lg">
      <img src={logo} alt="Logo" className="hidden md:block mr-auto" />
      <Spacer />
      {items.map((item) => (
        <NavbarButton
          title={item.title}
          key={item.title}
          to={item.link}
          position={item.position}
        />
      ))}
    </div>
  );
};

export default Navbar;
