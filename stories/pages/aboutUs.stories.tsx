import LandingPage from "@components/landingPage";
import { getStaticProps } from "../../pages/[slug]";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Pages/About Us",
  component: LandingPage,
};

export const AboutUsPage = (args, props) => {
  console.log({ props: props.loaded.props });
  return (
    <LandingPage
      {...args}
      preview={props.loaded.props.preview}
      page={props.loaded.props.page}
    />
  );
};
AboutUsPage.loaders = [
  async () => await getStaticProps({ params: { slug: "about-us" } } as any),
];
