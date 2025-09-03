import { Outlet } from "react-router-dom";
import ActiveLink from "./components/ActiveLink";
import logo from "../public/images/logo/logo.svg";

export default function App() {
  return (
    <div>

      <div className="motherdiv">
        <img src={logo} alt="Space Tourism Logo" />
        <div className="line"></div>

        <nav className="nav">
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/destination">Destination</ActiveLink>
          <ActiveLink to="/crew">Crew</ActiveLink>
          <ActiveLink to="/technology">Technology</ActiveLink>
        </nav>
      </div>
      <main>
        <Outlet /> {/* 👈 This is what renders the child pages */}
      </main>
    </div>
  );
}
