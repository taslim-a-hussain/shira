const path = require('path');
const { merge } = require('webpack-merge');

const TerserPlugin = require("terser-webpack-plugin");

const maxAssetSize = 1024 * 1024;

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    config.module.rules.push({
        rules: [
          {
            test: /\.s(a|c)ss$/,
            include: path.resolve(__dirname, "../"),
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  modules: {
                    auto: true,
                    localIdentName: "[name]__[local]--[hash:base64:5]"
                  }
                }
              },
              "sass-loader"
            ]
          },
          {
            test: /\.(png|jpe?g|gif|ico)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          }
        ]
    });
    return merge(config, {
      optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
          extractComments: true
        })],
        runtimeChunk: true,
        sideEffects: true,
        usedExports: true,
        splitChunks: {
          chunks: 'all',
          minSize: 30 * 1024,
          maxSize: maxAssetSize,
        }
      },
      performance: {
        assetFilter: function (assetFilename) {
          return assetFilename.endsWith('.js');
        },
        maxEntrypointSize: maxAssetSize * 1.7,
        maxAssetSize: maxAssetSize
      }
    });
  },
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  }
}
