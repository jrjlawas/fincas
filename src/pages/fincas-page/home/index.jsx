import PageMeta from "@/components/PageMeta.jsx";
import TopBanner from "../../fincas-components/banner";
import Header from "../../fincas-components/header";
import Hero from "../../fincas-components/hero";
import About from "../../fincas-components/about";
import About2 from "../../fincas-components/about2";
import Contact from "../../fincas-components/contact";
import CtaArea from "../../fincas-components/cta";
import Footer from "../../fincas-components/footer";
import BackToTop from "@/components/BackToTop.jsx";
import favLogo1 from "@/assets/img/Fincas/40x40Logo.png";
const Home = () => {
  return (
    <>
      <PageMeta title="FINCAS Management Services Ltd." icon={favLogo1} />
      <TopBanner />
      <Header />
      <Hero />
      <About />
      <About2 />
      <Contact />
      <CtaArea />
      <Footer />
      <BackToTop />
    </>
  );
};
export default Home;
