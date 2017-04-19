"use strict"
var nuevo = require('./shapes.js');
var Shape = nuevo.Shape


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
module.exports = { Square: Square };
