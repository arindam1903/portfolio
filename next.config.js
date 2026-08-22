const path = require('path')
 
module.exports = {
  // basePath should only be used if your site is not served from the root path
  // basePath: '/subpath', // uncomment and modify if needed
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
    ],
  },
}