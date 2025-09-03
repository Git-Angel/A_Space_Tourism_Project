import { Link } from "react-router-dom";


export default function Home() {
return (
<section className="home">
<div className="home__text">
<p className="eyebrow">So, you want to travel to</p>
<h1 className="display">SPACE</h1>
<p className="lead">
Let’s face it; if you want to go to space, you might as well genuinely go <br/> to outer space and not hover kind of on the edge of it. Well sit back,<br/> and relax because we’ll give you a truly out of this world experience!
</p>
</div>
<Link to="/destination" className="cta">Explore</Link>
</section>
);
}