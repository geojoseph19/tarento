const hue = 120; // 0-360
const saturation = 100; // 0-100
const lightness = 50; // 0-100

const hslColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

function palettegen()
{
    for (let i = 1; i<10; i++) {
        document.getElementById(`b${i}`).style.backgroundColor = hslColor;
    }
}