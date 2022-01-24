import Home, { getStaticProps } from "../../pages/index";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Pages/01 Home",
  component: "Home",
};

export const HomePage = (args, props) => (
  <Home
    {...args}
    preview={props.loaded.props.preview}
    page={props.loaded.props.page}
  />
);
HomePage.loaders = [async () => await getStaticProps({})];
