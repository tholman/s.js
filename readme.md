## S.JS

The web canvas is a powerful tool, the API is fairly straight forward, and provides us with the tools to draw almost anything. Circles, squares and lines are the building blocks we have used since the dawn of time...

That said, there is also one other basic shape... that we all learn in school... passed down through generations... as old as time... no one really knows its origin. That shape is:

![The S itself](https://i.imgur.com/sGpeOem.png)

This polyfill bridges the missing link, moving the canvas from a tool for children, to a tool for adults.

## Syntax
`void ctx.s(x, y, width, height);`

#### Parameters

**`x`**
The x axis of the coordinate for the S starting point.

**`y`**
The y axis of the coordinate for the S starting point.

**`width`**
The S's width.

**`height`**
The S's height.

## Usage

The `s` function works similar to canvas's `rect` functionality. Once the script is included on the page, you can run both the `stroke` and `fill` functions.

#### HTML
```html
<canvas id="canvas"></canvas>
````
#### JavaScript

```javascript
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = "rebeccapurple";
ctx.s(10, 10, 100, 100);
ctx.fill();
ctx.stroke();
```

## Licence

Creative Commons ... its not like someone could restrict usage of the beloved S

