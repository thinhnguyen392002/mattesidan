function sum(a, b) {
    return a + b;
  }
  function formelk (y1,x1,y2,x2){
    var k = (y2-y1)/ (x2-x1);
  // y = kx + m
  // m = y - k
  return k ;
}
  module.exports = { sum, formelk };