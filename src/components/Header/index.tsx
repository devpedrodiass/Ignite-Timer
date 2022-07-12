import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { HeaderContainer } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24}></Timer>
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24}></Scroll>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
