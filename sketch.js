let ip_api = 'http://api.ipify.org?format=json';
let ip;
let ip_colores = 'https://www.thecolorapi.com/id?rgb=rgb(';
let colorData;

function setup() {
  createCanvas(400, 400);
  getIP ();
  getColores ();
  setInterval (getColores,3000);
}

function getIP (){
  fetch (ip_api)
  .then (response=>response.json())
  .then (data => ip = data.ip);
}

function getColores (){
  let r = floor (random(256));
  let g = floor (random(256));
  let b = floor (random(256));
  fetch (ip_colores+r+','+g+','+b+')')
  .then (response =>response.json())
  .then (data => {
    colorData = {
    name: data.name.value,
    hex: data.hex.clean,
    rgb:[r,g,b]
  };
});
}

function draw() {
  background(220);
  if (colorData){
    fill (colorData.rgb[0], colorData.rgb[1], colorData.rgb [2]);
    rect (140,100,100,100);
    textSize (20);
    text (colorData.name,140,250);
    text (colorData.hex, 150,60);
  }
}
