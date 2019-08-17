import webpack from 'webpack';

module.exports = {
    // some configuration
    assetPrefix: process.env.NODE_ENV === 'production' ? '/{reponame}' : '',
    exportPathMap: () => ({
        '/': { page: '/' },
        '/about': { page: '/about' },
      }),
      webpack: config => {
        config.plugins.push(
          new webpack.DefinePlugin({
            'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
          }),
        )
    
        return config
      },
    // another configuration
  }