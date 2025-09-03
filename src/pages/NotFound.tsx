import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="notfound">
      <h2>404 – Page not found</h2>
      <p>Let’s guide you back to Earth.</p>
      <Link className="cta" to="/">Go Home</Link>
    </section>
  );
}
