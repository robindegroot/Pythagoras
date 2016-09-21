function Triangle () {
  this.x = 0;
  this.y = 0;
  this.xLeft = 0;
  this.yLeft = 0;
  this.colorFill = "#000000";
  this.colorLine = "#ffff00";
  this.AB = function () {return this.x - this.xLeft};//bereken AB
  this.BC = function () {return this.y - this.yLeft};//bereken BC
  this.AC = function ()
  {
      return (Math.sqrt(Math.pow(this.AB(),2)+Math.pow(this.BC(),2)));
        };//bereken AC
  this.angleA = function () 
  {
      var sin = Math.asin(this.BC()/this.AB());
      return Math.round(sin*180/Math.PI);
  };
  this.angleC = function () 
  {
      var tan = Math.atan(this.BC()/this.AC());
      return Math.round(tan*180/Math.PI);
  };
}

Triangle.prototype.draw = function (context) {
  context.save();
  context.lineWidth = 2;
  context.globalAlpha=0.8; // opacity
  context.fillStyle = this.colorFill;
  context.strokeStyle = this.colorLine
  context.beginPath();
  context.moveTo(this.xLeft, this.yLeft);  // A start triangle
  context.lineTo(this.x, this.yLeft); // B
  context.lineTo(this.x , this.y); // C follow mouse
  context.closePath();
  context.fill();
  context.stroke();
  
   //draw A B C
   context.globalAlpha=1; // opacity
   context.font="20px Courier";
   context.fillText("A", this.xLeft, this.yLeft + 15);
   context.fillText("B", this.x, this.yLeft + 15);
   context.fillText("C", this.x , this.y );
   context.restore();
};