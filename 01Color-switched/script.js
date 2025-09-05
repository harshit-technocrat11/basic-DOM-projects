const body = document.body;
//random
const randomColorBtn = document.querySelector("#randomBtn");

//apply input color
const applyBtn = document.querySelector("#applyBtn");

// color input 
const ColorInput = document.querySelector("#color");

const currentColorVal = document.querySelector(".currentColorValue");

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

//functions
function applyRandomColor(){

    let randomIndex = Math.floor(Math.random()*colorList.length) ;
    let color = colorList[randomIndex]
    body.style.backgroundColor = color;

    //updating current value
    currentColorVal.textContent = color;
    
}

function applyInputColor() {
    //base conditions- 
    const color = ColorInput.value
    console.log(ColorInput.value)
    body.style.backgroundColor = color;

    //updating current value
    currentColorVal.textContent = color;

}


//event listners
randomColorBtn.addEventListener("click", applyRandomColor );

//apply color
applyBtn.addEventListener("click" , applyInputColor)

