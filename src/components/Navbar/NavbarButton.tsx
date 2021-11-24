import { Link } from "react-router-dom";

interface props {
  title: string;
  active?: boolean;
  order?: string;
  link?: string;
 
}
export const NavbarButton = ({ title, active, order, link }: props) => {
  return (
    <Link
      className={`p-5 uppercase border-opacity-0 hover:border-secondary hover:border-opacity-100 border-b-2 text-menuElement cursor-pointer ${
        active ? `border-b-8 border-opacity-100 border-ffffff` : false
      }  `}
      to={link as string}
    >
      <b> {order}</b> {title}
    </Link>
  );
};
export default NavbarButton;
