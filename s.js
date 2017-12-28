(function() {

  // Check that functionality doesn't already exist in the browser.
  if( CanvasRenderingContext2D.prototype.s && CanvasRenderingContext2D.prototype.fillS ) {
    return;
  }

  CanvasRenderingContext2D.prototype.s = function(x, y, w, h) {

    var tipHeight = h * 0.15; // 15% * 2 (top and bottom)
    var lineHeight = h * 0.3; // 30% * 2 (main lines)
    var joinHeight = h * 0.1; // 10% (joining the center)

    /**
     *   /  \
     *  
     * 
     *
     *
     **/
    var localY = y;
    this.moveTo(x, localY + tipHeight);
    this.lineTo(x + w / 2, y);
    this.lineTo(x + w, localY + tipHeight);
    

    /**
     *   /  \
     *  | | |
     * 
     *
     *
     **/
    localY = y + tipHeight;
    this.moveTo(x, localY);
    this.lineTo(x, localY + lineHeight);
    this.moveTo(x + w / 2, localY);
    this.lineTo(x + w / 2, localY + lineHeight);
    this.moveTo(x + w, localY);
    this.lineTo(x + w, localY + lineHeight);


    /**
     *   /  \
     *  | | |
     *  join
     *
     *
     **/
    localY = y + tipHeight + lineHeight;
    this.moveTo(x, localY);
    this.lineTo(x + w / 2, localY + joinHeight);
    this.moveTo(x + w / 2, localY);
    this.lineTo(x + w, localY + joinHeight);
    this.moveTo(x + w, localY);
    this.lineTo(x + w - w / 4, localY + joinHeight / 2);
    this.moveTo(x + w / 4, localY + joinHeight / 2);
    this.lineTo(x, localY + joinHeight);

    /**
     *   /  \
     *  | | |
     *  join
     *  | | |
     *
     **/

    localY = y + tipHeight + lineHeight + joinHeight;
    this.moveTo(x, localY);
    this.lineTo(x, localY + lineHeight);
    this.moveTo(x + w / 2, localY);
    this.lineTo(x + w / 2, localY + lineHeight);
    this.moveTo(x + w, localY);
    this.lineTo(x + w, localY + lineHeight);

    /**
     *   /  \
     *  | | |
     *  join
     *  | | |
     *  \  /
     **/

    var localY = y + tipHeight + joinHeight + lineHeight * 2;
    this.moveTo(x, localY);
    this.lineTo(x + w / 2, localY + tipHeight);
    this.moveTo(x + w, localY);
    this.lineTo(x + w / 2, localY + tipHeight);


  }

  CanvasRenderingContext2D.prototype.fillS = function(x, y, w, h) {

  }

})(true);

var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = 500;
canvas.height = 500;

var context = canvas.getContext('2d');

context.lineWidth = 10;
context.s(10, 10, 50, 300);

context.stroke();
