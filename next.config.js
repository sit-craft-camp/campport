const StatsPlugin = require('stats-webpack-plugin')

module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' }
  }),
  webpack: (config, {dev}) => {
    config.profile = true
    config.plugins.push(
      new StatsPlugin('stats.json', {
        timings: true,
        assets: true,
        chunks: true,
        chunkModules: true,
        modules: true,
        children: true,
        cached: true,
        reasons: true
      })
    )

    if (dev) {
      return config
    }

    config.resolve.alias = {

    }

    return config
  }
}
