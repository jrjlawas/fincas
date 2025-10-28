import PageMeta from "@/components/PageMeta.jsx";
import TopBanner from "../../fincas-components/banner";
import Header from "../../fincas-components/header";
import PodcastsHero from "../../fincas-components/podcastsHero";
import PodcastsLists from "../../fincas-components/podcastsLists";
import CtaArea from "../../fincas-components/cta";
import Footer from "../../fincas-components/footer";
import BackToTop from "@/components/BackToTop.jsx";
import favLogo1 from "@/assets/img/Fincas/40x40Logo.png";
const Podcasts = () => {
  return (
    <>
      <PageMeta title="FINCAS Management Services Ltd." icon={favLogo1} />
      <TopBanner />
      <Header />
      <PodcastsHero />
      <PodcastsLists />
      <CtaArea />
      <Footer />
      <BackToTop />
    </>
  );
};
export default Podcasts;
