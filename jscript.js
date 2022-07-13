const boxContainer = document.getElementById("grid-container");
const slider = document.getElementById("slider");
const numberOnSlider = document.getElementById("value");
const picker = document.getElementById("colorPicker");
const butt = document.querySelectorAll("button");

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

window.onload = () => {
    numberOnSlider.innerHTML = slider.value;
    let finalInput = numberOnSlider.innerHTML;
    updateGridSize(finalInput);
  }

slider.oninput = function() {
    numberOnSlider.innerHTML = this.value;
    let finalInput = numberOnSlider.innerHTML;
    clearGrid();
    updateGridSize(finalInput);
  }


function updateGridSize(amount) {
    boxContainer.style.gridTemplateColumns = `repeat(${amount},auto)`;
    boxContainer.style.gridTemplateColumns = `repeat(${amount},auto)`;

    for (let i = 0; i < amount * amount; i++) {
        const gridElement = document.createElement("div");
        gridElement.removeAttribute("draggable");
        gridElement.addEventListener('mouseover', changeColor)
        gridElement.addEventListener('mousedown', changeColor)
        boxContainer.appendChild(gridElement);    
    }
}

function clearGrid() {
    boxContainer.innerHTML = ""
}

function changeColor(e) {
  if (e.type === 'mouseover' && !mouseDown) {
    return
  } else {
    e.target.style.backgroundColor = picker.value;
  }
}

butt.forEach(element => {
  element.addEventListener("click", () =>{
    
  });
});