const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  target: 'serverless',
  pageExtensions: ['js', 'jsx', 'mdx'],
});
