import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader, SiteFooter } from "@/components/site-shell";
import aboutPhoto from "@/assets/gwe-about-original.webp.asset.json";

export const Route = createFileRoute("/about-us")({
  component: AboutUs,
  head: () => ({ meta: [
    { title: "About Us | GWE NGO India — Glorious Women Empowerment" },
    { name: "description", content: "Learn about Glorious Women Empowerment, founded in 1998, its work for women and children in Andhra Pradesh, executive committee and staff." },
    { property: "og:title", content: "About Us | GWE NGO India" },
    { property: "og:description", content: "Our beginnings, community work, governance and the people behind Glorious Women Empowerment in Andhra Pradesh." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

const committee = [
  ["01", "Ms.RG.Deepika", "President"],
  ["02", "Ms.B.Kumari", "Vice President"],
  ["03", "Ms.M.D. Muneswaramma", "Secretary"],
  ["04", "Ms.P.Sumalatha", "Joint Secretary"],
  ["05", "Ms.B.Mounika", "Treasurer"],
  ["06", "Ms.M.Mani", "Executive Member"],
  ["07", "Ms.G.Gouramma", "Executive Member"],
];

function AboutUs() {
  return <>
    <SiteHeader activePage="About Us" />
    <main>
      <section className="about-page-heading">
        <div className="container">
          <nav className="page-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><ArrowRight size={14} /><span aria-current="page">About Us</span></nav>
          <div className="eyebrow section-kicker">Glorious Women Empowerment</div>
          <h1>About Us</h1>
        </div>
      </section>
      <section className="section container about-page-story">
        <div className="about-page-opening">
          <div className="about-page-prose">
            <p>In the year 1998, we, seven women, having passion in social service formed an organization by name “Glorious Women Empowerment”. We are all women members and belong to backward and downtrodden communities. Our society was registered and started activities for the upliftment of the quality of life of the downtrodden communities particularly women and children. We focus women and children but do activities to other vulnerable, disadvantaged, deprived sections, who are poor and in need of help and assistance. We have compassion towards the problems of the poor and would like to do something for their empowerment. We understood that lack of knowledge and awareness is the main reason for all the problems of human beings. We felt the fruits of development are not reaching to the downtrodden communities.</p>
            <p>We would like to take up social economic, health, educational, agricultural, rural development and cultural activities for transformation of the society. That is why, we have established this society. We have service minded EC Members, dedicated staff and committed volunteers. We have interest, will and pleasure to take up welfare and developmental activities for the needy sections of the society.</p>
          </div>
          <figure className="about-page-photo"><img src={aboutPhoto.url} alt="Glorious Women Empowerment community activities" fetchPriority="high" /></figure>
        </div>
        <div className="about-page-prose">
          <p>GWE NGO in Andhra Pradesh is committed to the empowerment of women and development of Children. Presently it is working in Kurnool and Kadapa Districts, in the coming years would like to expand its activities to the Ananthapur, Chittoor Districts of Andhra Pradesh. Our main of streamlining welfare services for the disadvantaged sections of society.</p>
          <p>Since its inception the GWE NGO is a major catalyst of social empowerment, it provides opportunities to women to acquire education and skills and to overcome the obstacles they face in their family and community. Glorious Women Empowerment is achieving its targets by rising online and offline donations through individual philanthropist, corporate social responsibility from India and abroad. You can also make online donations to our GWE NGO India through Paypal credit card and secure online payment gateway.All donations to Glorious Women Empowerment is tax deductible under 80G Income Tax Exemption Act. You will get a tax receipt and purpose of donation utilization after receiving money from you. You will receive feedback utilization of the amount for specific purpose.</p>
          <p>So please donate generously to our Non Government Organization with your credit card, debit card and net banking with secure online payment gateway. Glorious Women Empowerment NGO is registered in the year 1998 under the Societies Registration Act, XXI of 1860, vide Regd.No. 414/1998.</p>
        </div>
      </section>
      <section className="section about-section">
        <div className="container about-page-prose">
          <h2 className="section-title">Compliance / Credentials and Legal Certificates of the NGO in Andhra Pradesh</h2>
          <p>As part of Good Governance, the GWE NGO India is maintaining following standards and filing the returns as per the societies act &amp; credibility alliance to maintain as good and credible NGO among several Best Indian NGOs. GWE NGO is growing nonprofit organization in Andhra Pradesh, which is working for the economically disadvantaged people to eradicate the poverty</p>
        </div>
      </section>
      <section className="section container about-page-prose">
        <h2 className="section-title">The Executive Committee Members for the year 2022-2023</h2>
        <div className="about-table-scroll"><table className="about-table"><caption className="sr-only">Executive committee members for 2022-2023</caption><thead><tr><th scope="col">S.No.</th><th scope="col">Name</th><th scope="col">Designation</th></tr></thead><tbody>{committee.map(row => <tr key={row[0]}>{row.map((cell, index) => <td key={index}>{cell}</td>)}</tr>)}</tbody></table></div>
        <p>The executive committee members are belongs to dalits, working in different vocations for their family sustenance and working for the needy communities irrespective of caste, creed and religion.</p>
        <h2 className="section-title about-staff-title">Staff of the Organization</h2>
        <div className="about-table-scroll"><table className="about-table"><caption className="sr-only">Staff of the organization</caption><thead><tr>{["S.No.", "Name of the Staff", "Designation", "Remuneration p.a"].map(heading => <th key={heading} scope="col">{heading}</th>)}</tr></thead><tbody><tr><td>01</td><td>Ms.Jayalakshmi</td><td>Project Coordinator</td><td>Rs.24000</td></tr><tr><td>02</td><td>Ms.Rathamma</td><td>Community Organizer</td><td>Rs.24000</td></tr></tbody></table></div>
        <p>No. of paid volunteers : Nil</p>
        <p>No. of un-paid volunteers: 17</p>
        <Button asChild className="donate-button mt-8"><Link to="/" hash="donate">Support GWE NGO India <Heart size={16} /></Link></Button>
      </section>
    </main>
    <SiteFooter />
  </>;
}