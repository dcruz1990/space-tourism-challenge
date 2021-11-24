import logo from "../../assets/shared/logo.svg";
import Spacer from "../common/Spacer";
import NavbarButton from "./NavbarButton";


const Navbar = () => {
  const items = [
    {
      index: "00",
      title: "Home",
      link: "/"
    },
    {
      index: "01",
      title: "Destination",
      link: "/destination"
    },
    {
      index: "02",
      title: "Crew",
      link: "/crew"
    },
    {
      index: "03",
      title: "Teechnology",
      link: "/technology"
    },
  ];
  return (
    <div className=" flex justify-end items-center backdrop-filter backdrop-blur-lg">
      <img src={logo} alt="Logo" className="mr-auto" />
      <Spacer />
      {items.map((item) => (
        <NavbarButton title={item.title} order={item.index} key={item.title} link={item.link} />
      ))}
    </div>
  );
};

export default Navbar;
