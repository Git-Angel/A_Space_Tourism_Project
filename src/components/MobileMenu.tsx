

import { NavLink } from "react-router-dom";
import type { NavLinkProps } from "react-router-dom";

export default function ActiveLink(props: NavLinkProps) {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        `nav-link ${isActive ? "nav-link--active" : ""} ${props.className ?? ""}`
      }
    />
  );
}
