import { Link, useMatch, useResolvedPath } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

// extend LinkProps to add position prop
type LinkPropsWithPosition = LinkProps & {
  position?: string;
};

export const NavbarButton = ({
  children,
  to,
  title,
  position,
  ...props
}: LinkPropsWithPosition) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      className={`p-5 uppercase border-opacity-0 hover:border-secondary hover:border-opacity-100 border-b-2 text-menuElement cursor-pointer ${
        match ? `border-b-4 border-opacity-100 border-ffffff` : false
      }  `}
      to={to}
    >
      <b className="invisible lg:visible"> {position}</b> {title}
    </Link>
  );
};
export default NavbarButton;
