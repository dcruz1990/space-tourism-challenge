interface props {
  title: string;
  active?: boolean;
  order?: string;
 
}
export const NavbarButton = ({ title, active, order }: props) => {
  return (
    <div
      className={`p-5 uppercase border-opacity-0 hover:border-secondary hover:border-opacity-100 border-b-2 text-menuElement cursor-pointer ${
        active ? `border-b-8 border-opacity-100 border-ffffff` : false
      }  `}
    >
      <b> {order}</b> {title}
    </div>
  );
};
export default NavbarButton;
