// Color palette generator

const numOfPalettes = 5;
var shuffle = 0;
var h;
var s;
var l;
var hslColor;


function shuffleFun()
{
    shuffle = document.getElementById("shufflebox");
    if(shuffle.checked == true){
        shuffle = 1;
    }
    else{
        shuffle = 0;
    }
}


// const hue = 120; // 0-360
// const saturation = 100; // 0-100
// const lightness = 50; // 0-100

// Random number generation
// ran = Math.floor(Math.random() * (max - min) + min);
// ran = Math.floor(Math.random() * max);

// hslColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;


function palettegen()
{
    if(shuffle == 0){
        h = Math.floor(Math.random() * 361);
        for (let i = 1; i<6; i++) {
            
            s = Math.floor(Math.random() * 101);
            l = Math.floor(Math.random() * 101);
    
            hslColor = `hsl(${h}, ${s}%, ${l}%)`;
    
            document.getElementById(`b${i}`).style.backgroundColor = hslColor;
            document.getElementById(`d${i}`).innerText = hslColor;
        }
    }
    else{
        for (let i = 1; i<6; i++) {
            h = Math.floor(Math.random() * 361);
            s = Math.floor(Math.random() * 101);
            l = Math.floor(Math.random() * 101);
    
            hslColor = `hsl(${h}, ${s}%, ${l}%)`;
    
            document.getElementById(`b${i}`).style.backgroundColor = hslColor;
            document.getElementById(`d${i}`).innerText = hslColor;
        }
    }
    
}



function resetSettings(){
    for (let i = 1; i<6; i++) {

        document.getElementById(`b${i}`).style.backgroundColor = "#ebebeb";
        document.getElementById("d1").innerText = "1";
        document.getElementById("d2").innerText = "2";
        document.getElementById("d3").innerText = "3";
        document.getElementById("d4").innerText = "4";
       document.getElementById("d5").innerText = "5";    
    }
}