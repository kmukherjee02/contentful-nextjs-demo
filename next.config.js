const webpack = require("webpack");
// const withSvgr = require("next-svgr");

module.exports = {
  //   images: {
  //     loader: "default",
  //   },

  // images: {
  // 	domains: ['images.ctfassets.net'],
  // 	loader: 'custom',
  // },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
};
