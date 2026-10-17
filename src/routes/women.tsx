import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader, SiteFooter } from "@/components/site-shell";
import womenPhoto from "@/assets/gwe-women-original.webp.asset.json";

export const Route = createFileRoute("/women")({
  component: Women,
  head: () => ({ meta: [
    { title: "Women | GWE NGO India — Independence and Confidence" },
    { name: "description", content: "GWE NGO India helps women be independent through women empowerment and health education programs, so they can earn on their own and live their lives happily." },
    { property: "og:title", content: "Women | GWE NGO India" },
    { property: "og:description", content: "Skill training and health education to make women independent and confident." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

function Women() {
  return <>
    <SiteHeader activePage="Women" />
    <main>
      <section className="about-page-heading"><div className="container">
        <nav className="page-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><ArrowRight size={14} /><span aria-current="page">Women</span></nav>
        <div className="eyebrow section-kicker">Glorious Women Empowerment</div>
        <h1>Women</h1>
      </div></section>
      <section className="section container">
        <div className="about-page-opening">
          <figure className="about-page-photo"><img src={womenPhoto.url} alt="GWE NGO India women empowerment and skill training in Kurnool" fetchPriority="high" /></figure>
          <div className="about-page-prose">
            <h2 className="section-title">Women</h2>
            <p>Women all over the world including our country have proved that they are no less than men. But, even today in rural areas women are considered nothing and have to be dependent on others for their livelihood. GWE NGO India believes that every individual should be independent no matter what. Therefore, we have come up with programs in order to help women be independent and live their lives happily.</p>
            <ul className="elders-needs">
              <li>Women Empowerment as the word suggests is to spread the power of women all over the world, is a program where we train women in different skills like Zari and Embroidery work, Computer Education, Soft toy making, etc so that they can earn on their own, support their families and live a better life.</li>
              <li>Health education to make women aware of the spreading diseases so that they can save themselves from it and also spread the word and save their community from it.</li>
              <li>GWE NGO India came up with these 2 programs not only to make women independent but to make them confident too.</li>
            </ul>
            <Button asChild className="donate-button mt-8"><Link to="/" hash="donate">Support GWE NGO India <Heart size={16} /></Link></Button>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
