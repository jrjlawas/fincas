import { lazy } from "react";

const Home = lazy(() => import("@/pages/fincas-page/home"));
const FincasHome = lazy(() => import("@/pages/fincas-page/contact"));
const FincasArticles = lazy(() => import("@/pages/fincas-page/articles"));
const ServiceProcurement = lazy(() =>
  import("@/pages/fincas-page/serviceProcurement")
);
const ServiceNegotiate = lazy(() =>
  import("@/pages/fincas-page/serviceNegotiate")
);
const ServiceContractor = lazy(() =>
  import("@/pages/fincas-page/serviceContractor")
);
const ServiceLeadership = lazy(() =>
  import("@/pages/fincas-page/serviceLeadership")
);
const ServiceOrganization = lazy(() =>
  import("@/pages/fincas-page/serviceOrganization")
);
const ServiceOutsource = lazy(() =>
  import("@/pages/fincas-page/serviceOutsource")
);
const ServiceExpat = lazy(() => import("@/pages/fincas-page/serviceExpat"));

const ServiceSupply = lazy(() => import("@/pages/fincas-page/serviceSupply"));

const ServicePlayer = lazy(() => import("@/pages/fincas-page/servicePlayer"));
const Certificates = lazy(() => import("@/pages/fincas-page/certificates"));

const MultiPageAnimalRescue = lazy(() =>
  import("@/pages/multi-page/animal-rescue")
);
const MultiPageHumanRights = lazy(() =>
  import("@/pages/multi-page/human-rights")
);
const MultiPageSeniorCitizen = lazy(() =>
  import("@/pages/multi-page/senior-citizen")
);
const MultiPageWaterAid = lazy(() => import("@/pages/multi-page/water-aid"));
const SinglePageHome = lazy(() => import("@/pages/single-page/home"));
const SinglePageAnimalRescue = lazy(() =>
  import("@/pages/single-page/animal-rescue")
);
const SinglePageHumanRights = lazy(() =>
  import("@/pages/single-page/human-rights")
);
const SinglePageSeniorCitizen = lazy(() =>
  import("@/pages/single-page/senior-citizen")
);
const SinglePageWaterAid = lazy(() => import("@/pages/single-page/water-aid"));
const About = lazy(() => import("@/pages/about"));
const Event = lazy(() => import("@/pages/event"));
const EventLeft = lazy(() => import("@/pages/event-left"));
const EventRight = lazy(() => import("@/pages/event-right"));
const EventSingle = lazy(() => import("@/pages/event-single"));
const Blog = lazy(() => import("@/pages/blog"));
const BlogLeft = lazy(() => import("@/pages/blog-left"));
const BlogRight = lazy(() => import("@/pages/blog-right"));
const BlogSingle = lazy(() => import("@/pages/blog-single"));
const Cause = lazy(() => import("@/pages/cause"));
const CauseLeft = lazy(() => import("@/pages/cause-left"));
const CauseRight = lazy(() => import("@/pages/cause-right"));
const CauseSingle = lazy(() => import("@/pages/cause-single"));
const Contact = lazy(() => import("@/pages/other-pages/contact"));
const Error404 = lazy(() => import("@/pages/other-pages/error-404"));
const Faq = lazy(() => import("@/pages/other-pages/faq"));
const Service = lazy(() => import("@/pages/other-pages/service"));
const Team = lazy(() => import("@/pages/other-pages/team"));
const multiPageRoutes = [
  {
    path: "/",
    name: "multi-page-home",
    element: <Home />,
  },
  {
    path: "/contact",
    name: "contact",
    element: <FincasHome />,
  },
  {
    path: "/articles",
    name: "articles",
    element: <FincasArticles />,
  },
  {
    path: "/services/procurement-and-business-strategy",
    name: "Procurement",
    element: <ServiceProcurement />,
  },
  {
    path: "/services/negotiation-strategy-and-training",
    name: "Negotiate",
    element: <ServiceNegotiate />,
  },
  {
    path: "/services/contractor-management-solution",
    name: "Contractor",
    element: <ServiceContractor />,
  },
  {
    path: "/services/interim-leadership-services",
    name: "Leadership",
    element: <ServiceLeadership />,
  },
  {
    path: "/services/orgranizational-design-development",
    name: "Organization",
    element: <ServiceOrganization />,
  },
  {
    path: "/services/outsourced-procurement-services",
    name: "Outsource",
    element: <ServiceOutsource />,
  },
  {
    path: "/services/targeted-expat-headhunter",
    name: "Expat",
    element: <ServiceExpat />,
  },
  {
    path: "/services/e2e-procurement-supplychain-training",
    name: "Expat",
    element: <ServiceSupply />,
  },

  {
    path: "/services/player-and-sport-management",
    name: "Player",
    element: <ServicePlayer />,
  },
  {
    path: "/certificates",
    name: "Certificates",
    element: <Certificates />,
  },

  {
    path: "/multi-page/animal-rescue",
    name: "multi-page-animal-rescue",
    element: <MultiPageAnimalRescue />,
  },
  {
    path: "/multi-page/human-rights",
    name: "multi-page-human-rights",
    element: <MultiPageHumanRights />,
  },
  {
    path: "/multi-page/senior-citizen",
    name: "multi-page-senior-citizen",
    element: <MultiPageSeniorCitizen />,
  },
  {
    path: "/multi-page/water-aid",
    name: "multi-page-water-aid",
    element: <MultiPageWaterAid />,
  },
];
const singlePageRoutes = [
  {
    path: "/home-single",
    name: "multi-page-home",
    element: <SinglePageHome />,
  },
  {
    path: "/animal-rescue",
    name: "single-page-animal-rescue",
    element: <SinglePageAnimalRescue />,
  },
  {
    path: "/human-rights",
    name: "single-page-human-rights",
    element: <SinglePageHumanRights />,
  },
  {
    path: "/senior-citizen",
    name: "single-page-senior-citizen",
    element: <SinglePageSeniorCitizen />,
  },
  {
    path: "/water-aid",
    name: "single-page-water-aid",
    element: <SinglePageWaterAid />,
  },
];
const otherRoutes = [
  {
    path: "/about",
    name: "about",
    element: <About />,
  },
  {
    path: "/event",
    name: "event",
    element: <Event />,
  },
  {
    path: "/event-left",
    name: "event-left",
    element: <EventLeft />,
  },
  {
    path: "/event-right",
    name: "event-right",
    element: <EventRight />,
  },
  {
    path: "/event-single",
    name: "event-single",
    element: <EventSingle />,
  },
  {
    path: "/blog",
    name: "blog",
    element: <Blog />,
  },
  {
    path: "/blog-left",
    name: "blog-left",
    element: <BlogLeft />,
  },
  {
    path: "/blog-right",
    name: "blog-right",
    element: <BlogRight />,
  },
  {
    path: "/blog-single",
    name: "blog-single",
    element: <BlogSingle />,
  },
  {
    path: "/cause",
    name: "cause",
    element: <Cause />,
  },
  {
    path: "/cause-left",
    name: "cause-left",
    element: <CauseLeft />,
  },
  {
    path: "/cause-right",
    name: "cause-right",
    element: <CauseRight />,
  },
  {
    path: "/cause-single",
    name: "cause-single",
    element: <CauseSingle />,
  },
  {
    path: "/pages/contact",
    name: "pages-contact",
    element: <Contact />,
  },
  {
    path: "/pages/error-404",
    name: "pages-error-404",
    element: <Error404 />,
  },
  {
    path: "/pages/faq",
    name: "pages-faq",
    element: <Faq />,
  },
  {
    path: "/pages/service",
    name: "pages-service",
    element: <Service />,
  },
  {
    path: "/pages/team",
    name: "pages-team",
    element: <Team />,
  },
];
const landingRoutes = [...multiPageRoutes, ...singlePageRoutes];
export { landingRoutes, otherRoutes };
