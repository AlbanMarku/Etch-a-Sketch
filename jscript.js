const boxContainer = document.getElementById("grid-container");


let amount = 25;

for (let i = 0; i < amount; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-item");
    boxContainer.appendChild(gridElement);    
}