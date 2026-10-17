import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader, SiteFooter } from "@/components/site-shell";
import empowermentPhoto from "@/assets/gwe-women-empowerment-original.webp.asset.json";

export const Route = createFileRoute("/women_/women-empowerment")({
  component: WomenEmpowerment,
  head: () => ({ meta: [
    { title: "Women Empowerment | GWE NGO India — Skills for Independence" },
    { name: "description", content: "GWE NGO India provides vocational training to women — zari and embroidery work, computer education — so they can learn a skill, earn their own livelihood and be independent." },
    { property: "og:title", content: "Women Empowerment | GWE NGO India" },
    { property: "og:description", content: "Vocational training in zari, embroidery and computer skills so women can earn and be independent." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

function WomenEmpowerment() {
  return <>
    <SiteHeader activePage="Women" />
    <main>
      <section className="about-page-heading"><div className="container">
        <nav className="page-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><ArrowRight size={14} /><Link to="/women">Women</Link><ArrowRight size={14} /><span aria-current="page">Women Empowerment</span></nav>
        <div className="eyebrow section-kicker">Glorious Women Empowerment</div>
        <h1>Women Empowerment</h1>
      </div></section>
      <section className="section container">
        <div className="about-page-opening">
          <figure className="about-page-photo"><img src={empowermentPhoto.url} alt="GWE NGO India vocational training for women — zari, embroidery and computer skills" fetchPriority="high" /></figure>
          <div className="about-page-prose">
            <h2 className="section-title">Women Empowerment</h2>
            <p>Be it a man or a woman, every individual needs to be independent today. GWE NGO India believes that everyone should be capable enough to earn their own livelihood. But, unfortunately, not every girl in our country gets a chance to study or learn a skill which will help them earn on their own. Therefore, GWE NGO India provides vocational training to women so as to help them learn a skill and be independent.</p>
            <p>Zari and embroidery work garments have great potential in today’s fashion world. Hence, we provide training in zari and embroidery work to women and girls which helps them get a better life altogether.</p>
            <p>Also, youngsters who have studied till 10th or intermediate but had to drop their studies in between if get computer training, will have a great option to grow in their careers. We have been thriving hard to raise resources locally to provide computer skill development training to youth for the last two years.</p>
            <p>Women empowerment is very much required in our country so as to stop domestic violence, discrimination between men and women and encourage equality.</p>
            <Button asChild className="donate-button mt-8"><Link to="/" hash="donate">Support GWE NGO India <Heart size={16} /></Link></Button>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
