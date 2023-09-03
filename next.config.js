const path = require('path')
 
module.exports = {
  basePath: 'arindamdutta.in',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}