const path = require('path')
 
module.exports = {
  basePath: '/github-pages',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}