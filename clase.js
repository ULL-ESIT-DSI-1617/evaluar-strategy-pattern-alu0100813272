
"use strict"

var tip= {}

class Shape{
    
    
 // static tipos;
    
    constructor(width,height){
           //this.tipos = {}
           
           this.width = width; 
           this.height = height;
    }
}


class Triangle extends Shape{
      constructor(width,height){
            super(width,height); 
            //Shape.tipos.Triangle = Triangle
            //tip.Triangle=Triangle
             tip.Triangle = Triangle
             console.log("safasdfa")
            
      }
          
       getArea(){
         var area = 5 * this.width * this.height;
         return area;
      }
}

class Square extends Shape{
      constructor(width){
            super(width,0); 
      }
          
       getArea(){
         var area = Math.pow(this.width, 2);
         return area;
      }
}

class Rectangle extends Shape{
      constructor(width,height){
            super(width,height); 
      }
          
      getArea(){
         var area = this.width * this.height;
         return area;
      }
}


/*module.exports = function getArea(shape, options) {
  var area = 0;
  area = shape.area();
  return area;
}*/

function getArea(shape, options){
      var area = 0;
      area = shape.getArea();
      return area;
}
 var measure = {
     Triangle: Triangle
     
 }
//main
try {
    
    var t = new tip['Triangle'](100,100);
    //var t = new Shape.gettipos['Triangle'](100,100);
   // var t = (eval('new ' + tipos['Triangle'] + "(100,100)"));
  //var t = new tipos[tipos]();
  
  //var t = new tipos['Triangle'](100,100);
  console.log(t);

 /* var t = getArea('Triangle',  { width: 100, height: 100 });
  console.log(t);
  var s = getArea('Square',    { width: 100 });
  console.log(s);
  var r = getArea('Rectangle', { width: 100, height: 100 });
  console.log(r);
  //var b = getArea('Bogus');*/
}
catch (e) {
  console.log(e);
}


