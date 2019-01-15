const dotenv = require('dotenv');
const webpack = require('webpack');
const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
});

const { parsed } = dotenv.config();

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  publicRuntimeConfig: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  },
  exportPathMap: function() {
    return {
      '/': { page: '/001' },
    };
  },
});
