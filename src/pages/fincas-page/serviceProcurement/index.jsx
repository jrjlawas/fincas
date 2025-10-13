import PageMeta from "@/components/PageMeta.jsx";
import TopBanner from "../../fincas-components/banner";
import Header from "../../fincas-components/header";
import ServiceProcurementHero from "../../fincas-components/serviceProcurementHero";
import ServiceProcurementAbout from "../../fincas-components/serviceProcurementAbout";
import Contact from "../../fincas-components/contact";
import CtaArea from "../../fincas-components/cta";
import Footer from "../../fincas-components/footer";
import BackToTop from "@/components/BackToTop.jsx";
import favLogo1 from "@/assets/img/Fincas/40x40Logo.png";
const ServiceProcurement = () => {
  return (
    <>
      <PageMeta title="FINCAS Management Services Ltd." icon={favLogo1} />
      <TopBanner />
      <Header />
      <ServiceProcurementHero />
      <ServiceProcurementAbout />
      <Contact />
      <CtaArea />
      <Footer />
      <BackToTop />
    </>
  );
};
export default ServiceProcurement;
