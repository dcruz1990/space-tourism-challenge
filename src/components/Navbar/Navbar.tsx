import logo from "../../assets/shared/logo.svg";
import Spacer from "../common/Spacer";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  let items = [
    {
      index: "00",
      title: "Home",
    },
    {
      index: "01",
      title: "Destination",
    },
    {
      index: "02",
      title: "Crew",
    },
    {
      index: "03",
      title: "Teechnology",
    },
  ];
  console.log(items);
  return (
    <div className=" flex justify-end items-center ">
      <img src={logo} alt="Logo" className="mr-auto" />
      {items.map((item) => {
        <NavbarButton title={item.title} order={item.index} />;
      })}
      <Spacer />
      <NavbarButton title="Home" order="00" />
      <NavbarButton title="Destination" order="01" />
      <NavbarButton title="Crew" order="02" />
      <NavbarButton title="Technology" order="03" />
    </div>
  );
};

export default Navbar;
