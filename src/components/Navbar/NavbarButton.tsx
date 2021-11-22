interface props {
  title: string;
  active?: boolean;
  order?: string;
}
export const NavbarButton = ({ title, active, order }: props) => {
  return (
    <div className="h-7 uppercase px-5 ">
      {order} {title}
    </div>
  );
};
export default NavbarButton;
