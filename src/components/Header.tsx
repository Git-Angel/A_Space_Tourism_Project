import { useState } from "react";
import ActiveLink from "./ActiveLink";


export default function Header() {
const [open, setOpen] = useState(false);


return (
<header className="header">
<div className="header__inner">
<a href="/" className="logo" aria-label="Space Tourism Home">ST</a>


<button
className="icon-btn hamburger"
aria-label="Open menu"
onClick={() => setOpen(true)}
>
☰
</button>


<div className="desktop-nav">
<ActiveLink to="/">00 Home</ActiveLink>
<ActiveLink to="/destination">01 Destination</ActiveLink>
<ActiveLink to="/crew">02 Crew</ActiveLink>
<ActiveLink to="/technology">03 Technology</ActiveLink>
</div>
</div>


{/* Mobile overlay */}
{open && (
<div className="overlay">
<div className="overlay__panel">
<button className="icon-btn close" aria-label="Close menu" onClick={() => setOpen(false)}>
✕
</button>
<nav className="overlay__nav" onClick={() => setOpen(false)}>
<ActiveLink to="/">00 Home</ActiveLink>
<ActiveLink to="/destination">01 Destination</ActiveLink>
<ActiveLink to="/crew">02 Crew</ActiveLink>
<ActiveLink to="/technology">03 Technology</ActiveLink>
</nav>
</div>
</div>
)}
</header>
);
}