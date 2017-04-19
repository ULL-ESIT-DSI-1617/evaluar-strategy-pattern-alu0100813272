

var medida = require('./shapes');
var triangle = require('./triangle.js');
var rectangle = require('./rectangle.js');
var square = require('./square.js');





try {
  var t = medida.getArea('Triangle',  { width: 100, height: 100 });
  console.log(t);
  var s = medida.getArea('Square',    { width: 100 });
  console.log(s);
  var r = medida.getArea('Rectangle', { width: 100, height: 100 });
  console.log(r);
  //var b = getArea('Bogus');
  
}
catch (e) {
  console.log(e);
}


