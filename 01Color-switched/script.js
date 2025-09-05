
const randomColorBtn = document.querySelector("#randomBtn");

const applyBtn = document.querySelector("#applyBtn");

const ColorInput = document.querySelector("#color");

const body = document.body;

const colorList = ['#FF5733', // A vibrant reddish-orange
    '#33FF57', // A bright lime green
    '#3357FF', // A strong blue
    '#FFC300', // A vivid yellow-orange
    '#C70039', // A deep crimson
    'purple',
    '#2ECC71', // Emerald green
    '#E74C3C', // Alizarin crimson red
    '#3498DB', // Peter river blue
    'orange',
    '#F1C40F', // Sunflower yellow
    '#9B59B6'  // Amethyst purple
]

//adding events

applyBtn.addEventListener("click", function(e) {

    let randomIndex = Math.floor(Math.random()*10) ;
    let color = colorList[randomIndex]
    body.style.backgroundColor = color;
    
} )
