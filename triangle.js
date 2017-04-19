"use strict"
var nuevo = require('./shapes.js');
var Shape = nuevo.Shape

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
module.exports = { Triangle: Triangle};