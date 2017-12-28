(function() {

  // Check that functionality doesn't already exist in the browser.
  if( CanvasRenderingContext2D.prototype.strokeS && CanvasRenderingContext2D.prototype.fillS ) {
    return;
  }

  CanvasRenderingContext2D.prototype.strokeS = function(x, y, w, h) {

    // These are the three secret sacred numbers of the beloved S
    // ~ they are at the root of every argument in tech, hidden behind the scenes.
    // ~ they are the one and only.
    // ~ they are the secret to everything.
    // ~ they are fibbonacchi's muse.
    // ~ shh don't tell.
    var tipHeight = h * 0.15; // 15% * 2 (top and bottom)
    var lineHeight = h * 0.3; // 30% * 2 (main lines)
    var joinHeight = h * 0.1; // 10% (joining the center)

    // The S is drawn in 2 lines, both originating from the center of the S
    this.moveTo(x + w - w / 4, y + tipHeight + lineHeight + joinHeight / 2);
    this.lineTo(x + w, y + tipHeight + lineHeight);
    this.lineTo(x + w, y + tipHeight);
    this.lineTo(x + w / 2, y);
    this.lineTo(x, y + tipHeight);
    this.lineTo(x, y + tipHeight + lineHeight);
    this.lineTo(x + w / 2, y + tipHeight + lineHeight + joinHeight)
    this.lineTo(x + w / 2, y + tipHeight + lineHeight * 2 + joinHeight)

    this.moveTo(x + w / 4, y + tipHeight + lineHeight + joinHeight / 2);
    this.lineTo(x, y + tipHeight + lineHeight + joinHeight)
    this.lineTo(x, y + tipHeight + lineHeight * 2 + joinHeight)
    this.lineTo(x + w / 2, y + tipHeight * 2 + lineHeight * 2 + joinHeight)
    this.lineTo(x + w, y + tipHeight + lineHeight * 2 + joinHeight)
    this.lineTo(x + w, y + tipHeight + lineHeight + joinHeight)
    this.lineTo(x + w / 2, y + tipHeight + lineHeight)
    this.lineTo(x + w / 2, y + tipHeight)

    this.stroke();
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
context.strokeS(10, 10, 50, 300);

