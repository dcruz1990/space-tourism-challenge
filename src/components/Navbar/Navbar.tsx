import logo from "../../assets/shared/logo.svg";
import Spacer from "../common/Spacer";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  const items = [
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
    <div className="my-10 mx-14 flex justify-end items-center ">
      <img src={logo} alt="Logo" />
      {/* {items.map((item) => {
        <NavbarButton title={item.title} order={item.index} />;
      })} */}
      <Spacer />
      <NavbarButton title="pepe" order="00" />
      <NavbarButton title="pepe" order="10" />
      <NavbarButton title="pepe" order="20" />
      <NavbarButton title="pepe" order="30" />
    </div>
  );
};

export default Navbar;
