const boxContainer = document.getElementById("grid-container");
const slider = document.getElementById("slider");
const numberOnSlider = document.getElementById("value");
const picker = document.getElementById("colorPicker");
const butt = document.querySelectorAll("button");

let mouseDown = false
let toggler = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

window.onload = () => {
    clearGrid();
  }

slider.oninput = function() {
    clearGrid();
  }


function updateGridSize(amount) {
    boxContainer.style.gridTemplateColumns = `repeat(${amount},auto)`;
    boxContainer.style.gridTemplateColumns = `repeat(${amount},auto)`;

    for (let i = 0; i < amount * amount; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList.add("grid-tem");
        gridElement.addEventListener('mouseover', changeColor);
        gridElement.addEventListener('mousedown', changeColor);
        boxContainer.appendChild(gridElement);    
    }
}

function clearGrid() {
    boxContainer.innerHTML = ""
    numberOnSlider.innerHTML = slider.value;
    let finalInput = numberOnSlider.innerHTML;
    updateGridSize(finalInput);
}

function deleteToggle() {
  if (toggler) {
    toggler = false;
  } else {
    toggler = true;
  }
}

function changeColor(e) {
  if (e.type === 'mouseover' && mouseDown) {
    if (!toggler) {
      e.target.style.backgroundColor = picker.value;
    } else if (toggler) {
      e.target.style.backgroundColor = "white";
    }
  }
}

butt.forEach(element => {
  element.addEventListener("click", () =>{
    if(element.textContent === "Clear") {
      clearGrid();
    }

    if (element.textContent === "Eraser") {
      deleteToggle();
      console.log(toggler);
      element.classList.toggle("activeButton");
    }
  });
})