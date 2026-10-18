import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader, SiteFooter } from "@/components/site-shell";
import mealPhoto from "@/assets/gwe-nutritious-meal.webp.asset.json";

export const Route = createFileRoute("/elders/nutritious-meal")({
  component: NutritiousMeal,
  head: () => ({ meta: [
    { title: "Nutritious Meal for Elders | GWE NGO India" },
    { name: "description", content: "GWE NGO India provides nutritious meals to elderly people in need so they do not have to sleep empty stomach. Support the elderly by helping them get a meal." },
    { property: "og:title", content: "Nutritious Meal for Elders | GWE NGO India" },
    { property: "og:description", content: "Help elderly people sleep with their stomachs full — support GWE NGO India's nutritious meal program." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

function NutritiousMeal() {
  return <>
    <SiteHeader activePage="Elders" />
    <main>
      <section className="about-page-heading"><div className="container">
        <nav className="page-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><ArrowRight size={14} /><Link to="/elders">Elders</Link><ArrowRight size={14} /><span aria-current="page">Nutritious meal</span></nav>
        <div className="eyebrow section-kicker">Glorious Women Empowerment</div>
        <h1>Nutritious meal</h1>
      </div></section>
      <section className="section container">
        <div className="about-page-opening">
          <figure className="about-page-photo"><img src={mealPhoto.url} alt="Nutritious meal for elders — food for old people, donate food for elders, GWE NGO India" fetchPriority="high" /></figure>
          <div className="about-page-prose">
            <h2 className="section-title">Nutritious meal</h2>
            <p>There are thousands of people all over the country who have no choice but to sleep empty stomach every night, who don't have a place to live in or clothes to wear, who may have pain in their knees due to the cold weather but have nowhere to go to, who may feel lonely but have no-one to talk to, no one to share their sorrows with, no one to laugh with. We won't even want to think of the life that they are living every day. Right?</p>
            <p>When we can't even skip a meal, then, how do these elderly people who need nutritious meal at this age, sleep empty stomach? They may have to face thousands of difficulties every day, may have to beg from hundreds of people all day, who may or may not help them. Thinking about all this makes me sad. Don't you feel the same? Have you ever thought what goes on in their hearts when people just ask them to move forward and not disturb them?</p>
            <p>GWE NGO India has a soft corner for elderly people in pain, we want to do as much as possible to make them happy and hence we try providing them Nutritious meal so that they can live a better life.</p>
            <p>Why not we all come forward and help them sleep with their stomachs full. We may not be able to do a lot, but let's try to do something for them. Our little effort may bring back their beautiful smiles for some time. Support the elderly, by helping them get a meal!! Try once, it feels good!!</p>
            <Button asChild className="donate-button mt-8"><Link to="/" hash="donate">Support GWE NGO India <Heart size={16} /></Link></Button>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
