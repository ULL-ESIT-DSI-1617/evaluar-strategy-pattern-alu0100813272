
var medida = require('../shapes');
var triangle = require('../triangle.js');
var rectangle = require('../rectangle.js');
var square = require('../square.js');



describe("getArea", function() {
  it("must compute the triangle area correctly", function() {
    var result = medida.getArea('Triangle',  { width: 100, height: 100 });
    /* There is a white space between consecutive columns */
     result.should.equal(50000);
  })
  it("must compute the Square area correctly", function() {
     var result = medida.getArea('Square',  { width: 100});
     /* There is a white space between consecutive columns */
     result.should.equal(10000);
  })
  
  it("must compute the Rectangle area correctly", function() {
     var result = medida.getArea('Rectangle',  { width: 10, height: 100 });
     /* There is a white space between consecutive columns */
     result.should.equal(1000);
  })
  
});
