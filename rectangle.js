"use strict"
var nuevo = require('./shapes.js');
var Shape = nuevo.Shape



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
module.exports = {Rectangle: Rectangle};