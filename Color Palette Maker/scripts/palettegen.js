// Color palette generator

const numOfPalettes = 5;
const shuffle = 0;

var h;
var s;
var l;
var hslColor;

// const hue = 120; // 0-360
// const saturation = 100; // 0-100
// const lightness = 50; // 0-100

// Random number generation
// ran = Math.floor(Math.random() * (max - min) + min);
// ran = Math.floor(Math.random() * max);

// hslColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;


function palettegen()
{
    h = Math.floor(Math.random() * 361);
    for (let i = 1; i<6; i++) {
        
        s = Math.floor(Math.random() * 101);
        l = Math.floor(Math.random() * 101);

        hslColor = `hsl(${h}, ${s}%, ${l}%)`;

        document.getElementById(`b${i}`).style.backgroundColor = hslColor;
    }
}