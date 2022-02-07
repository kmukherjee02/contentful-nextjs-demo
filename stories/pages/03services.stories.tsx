import LandingPage from "@components/landingPage";
import { getStaticProps } from "../../pages/[slug]";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Pages/03 Services",
  component: "Services",
};

export const ServicesPage = (args, props) => (
  <LandingPage
    {...args}
    preview={props.loaded.props.preview}
    page={props.loaded.props.page}
  />
);
ServicesPage.loaders = [
  async () => await getStaticProps({ params: { slug: "services" } } as any),
];
