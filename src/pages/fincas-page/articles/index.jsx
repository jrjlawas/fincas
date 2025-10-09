import PageMeta from "@/components/PageMeta.jsx";
import TopBanner from "../../fincas-components/banner";
import Header from "../../fincas-components/header";
import ArticleHero from "../../fincas-components/articleHero";
import Blog from "../../fincas-components/blog";
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
      <ArticleHero />
      <Blog />
      <Contact />
      <CtaArea />
      <Footer />
      <BackToTop />
    </>
  );
};
export default Home;
