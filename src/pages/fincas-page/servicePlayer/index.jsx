import PageMeta from "@/components/PageMeta.jsx";
import TopBanner from "../../fincas-components/banner";
import Header from "../../fincas-components/header";
import ServicePlayerHero from "../../fincas-components/servicePlayerHero";
import ServicePlayerAbout from "../../fincas-components/servicePlayerAbout";
import Contact from "../../fincas-components/contact";
import CtaArea from "../../fincas-components/cta";
import Footer from "../../fincas-components/footer";
import BackToTop from "@/components/BackToTop.jsx";
import favLogo1 from "@/assets/img/Fincas/40x40Logo.png";
const ServicePlayer = () => {
  return (
    <>
      <PageMeta title="FINCAS Management Services Ltd." icon={favLogo1} />
      <TopBanner />
      <Header />
      <ServicePlayerHero />
      <ServicePlayerAbout />
      <Contact />
      <CtaArea />
      <Footer />
      <BackToTop />
    </>
  );
};
export default ServicePlayer;
