import PageMeta from "@/components/PageMeta.jsx";
import TopBanner from "../../fincas-components/banner";
import Header from "../../fincas-components/header";
import ServiceLeadershipHero from "../../fincas-components/serviceLeadershipHero";
import ServiceLeadershipAbout from "../../fincas-components/serviceLeadershipAbout";
import Contact from "../../fincas-components/contact";
import CtaArea from "../../fincas-components/cta";
import Footer from "../../fincas-components/footer";
import BackToTop from "@/components/BackToTop.jsx";
import favLogo1 from "@/assets/img/Fincas/40x40Logo.png";
const ServiceLeadership = () => {
  return (
    <>
      <PageMeta title="FINCAS Management Services Ltd." icon={favLogo1} />
      <TopBanner />
      <Header />
      <ServiceLeadershipHero />
      <ServiceLeadershipAbout />
      <Contact />
      <CtaArea />
      <Footer />
      <BackToTop />
    </>
  );
};
export default ServiceLeadership;
