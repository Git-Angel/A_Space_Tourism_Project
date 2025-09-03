import { Outlet } from "react-router-dom";
import ActiveLink from "./components/ActiveLink";

export default function App() {
  return (
    <div>
      <nav className="nav">
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/destination">Destination</ActiveLink>
        <ActiveLink to="/crew">Crew</ActiveLink>
        <ActiveLink to="/technology">Technology</ActiveLink>
      </nav>
      <main>
        <Outlet /> {/* 👈 This is what renders the child pages */}
      </main>
    </div>
  );
}
