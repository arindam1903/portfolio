const path = require('path')
 
module.exports = {
  // basePath should only be used if your site is not served from the root path
  // basePath: '/subpath', // uncomment and modify if needed
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}