const path = require('path');
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "styles/global/variables.scss"; @import "styles/global/colors.scss";`
  },
};