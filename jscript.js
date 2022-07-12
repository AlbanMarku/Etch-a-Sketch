const boxContainer = document.getElementById("grid-container");
const slider = document.getElementById("slider");
const numberOnSlider = document.getElementById("value");

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
        gridElement.classList.add("grid-item");
        boxContainer.appendChild(gridElement);    
    }
}

function clearGrid() {
    boxContainer.innerHTML = ""
}