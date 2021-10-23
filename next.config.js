const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
module.exports = withBundleAnalyzer({})
module.exports = { experimental: { staticPageGenerationTimeout: 300 } }
