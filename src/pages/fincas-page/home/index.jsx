import PageMeta from "@/components/PageMeta.jsx";
import TopBanner from "../../fincas-components/banner";
import Header from "../../fincas-components/header";
import Hero from "../../fincas-components/hero";
import Footer from "../../fincas-components/footer";
import BackToTop from "@/components/BackToTop.jsx";
import favLogo1 from "@/assets/img/Fincas/40x40Logo.png";
const Home = () => {
  return (
    <>
      <PageMeta title="Fincas Management Services Ltd." icon={favLogo1} />
      <TopBanner />
      <Header />
      <Hero />
      <Footer />
      <BackToTop />
    </>
  );
};
export default Home;
