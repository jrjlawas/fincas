import PageMeta from "@/components/PageMeta.jsx";
import TopBanner from "../../fincas-components/banner";
import Header from "../../fincas-components/header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import IconArea from "./components/IconArea";
import favLogo1 from "@/assets/img/Fincas/40x40Logo.png";
import CtaArea from "../../fincas-components/cta";
import Footer from "../../fincas-components/footer";
import BackToTop from "@/components/BackToTop.jsx";
const ContactPage = () => {
  return (
    <>
      <PageMeta title="FINCAS Management Services Ltd." icon={favLogo1} />
      <TopBanner />
      <Header />
      <Hero />
      <Contact />
      <IconArea />
      <CtaArea />
      <Footer />
      <BackToTop />
    </>
  );
};
export default ContactPage;
