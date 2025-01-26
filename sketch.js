let ip_colores = 'https://www.thecolorapi.com/id?rgb=rgb(';
let colorData;

function setup() {
  createCanvas(400, 400);
  getColores ();
  setInterval (getColores,3000);
}


async function getColores (){
  let r = floor (random(256));
  let g = floor (random(256));
  let b = floor (random(256));
  let data = await fetch (ip_colores+r+','+g+','+b+')')
  let j_data = await data.json();
  colorData = {
    name: j_data.name.value,
    hex: j_data.hex.clean,
    rgb:[r,g,b]
  };
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