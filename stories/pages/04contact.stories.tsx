import LandingPage from "@components/landingPage";
import { getStaticProps } from "../../pages/[slug]";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Pages/04 Contact",
  component: "Contact",
};

export const ContactPage = (args, props) => (
  <LandingPage
    {...args}
    preview={props.loaded.props.preview}
    page={props.loaded.props.page}
  />
);
ContactPage.loaders = [
  async () => await getStaticProps({ params: { slug: "contact" } } as any),
];
