// import * as NextImage from "next/image";

import "../styles/globals.css";

// const OriginalNextImage = NextImage.default;
// console.log({ OriginalNextImage });
// Object.defineProperty(NextImage, "default", {
//   configurable: true,
//   value: (props) => <OriginalNextImage {...props} unoptimized />,
// });

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
