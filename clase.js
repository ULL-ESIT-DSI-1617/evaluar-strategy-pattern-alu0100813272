
"use strict"

class Shape{
    
    constructor(options){
          Object.assign(this, options);
          console.log(this);
    }
    
    getArea(){
       // var fig = new Shape.ShapeTipos[this.constructor.name](this);
        return this.area();
    }
}

Shape.ShapeTipos = Shape.ShapeTipos || {}



class Triangle extends Shape{
        constructor(options){
            
            super(options); 
        }
          
        area(){
           var area = 5 * this.width * this.height;
           return area;
        }
}

Shape.ShapeTipos.Triangle = Triangle;


class Square extends Shape{
      constructor(options){
            super(options); 
      }
          
      area(){
         var area = Math.pow(this.width, 2);
         return area;
      }
}

Shape.ShapeTipos.Square = Square;


class Rectangle extends Shape{
      constructor(options){
            super(options); 
      }
          
      getArea(){
         var area = this.width * this.height;
         return area;
      }
}

Shape.ShapeTipos.Rectangle = Rectangle;

/*module.exports = function getArea(shape, options) {
  var area = 0;
  area = shape.area();
  return area;
}*/

function getArea(shape, options){
     
      var fig = new Shape.ShapeTipos[shape](options);
      return fig.getArea();
     
}

//main
try {
    
  var t = getArea('Triangle',  { width: 100, height: 100 });
  console.log(t);
  var s = getArea('Square',    { width: 100 });
  console.log(s);
  var r = getArea('Rectangle', { width: 100, height: 100 });
  console.log(r);
  //Da error pro que no existe Bogus.
  var b = getArea('Bogus');
}
catch (e) {
  console.log(e);
}


