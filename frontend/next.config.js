module.exports = {
    basePath: process.env.NODE_ENV === 'production' ? '/deploy_fullstack_app' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/deploy_fullstack_app/' : '',
    images: {
      unoptimized: true,
    },
  }