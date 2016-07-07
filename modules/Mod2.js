module.exports = function(number){
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}
