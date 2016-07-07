var number = require('./Mod1.js');

var convert = require('./Mod2.js');

module.exports = {
  balance: function(min, max){
    return convert(number(min, max));
  },
  text: function(){
    return 'Account balance: \n';
  }
};
