import LandingPage from "@components/landingPage";
import { getStaticProps } from "../../pages/[slug]";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Pages/02 About Us",
  component: "About Us",
};

export const AboutUsPage = (args, props) => (
  <LandingPage
    {...args}
    preview={props.loaded.props.preview}
    page={props.loaded.props.page}
  />
);
AboutUsPage.loaders = [
  async () => await getStaticProps({ params: { slug: "about-us" } } as any),
];
