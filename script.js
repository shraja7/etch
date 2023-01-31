const form = document.querySelector("#gridCount");

const input = form.querySelector("input");
const button = form.querySelector("button");
const clearButton = document.querySelector("#clearButton");
let gridCount;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  gridCount = input.value;
  console.log(`The grid count is: ${gridCount}`);
  createGrid(gridCount);
});


//creating the grid


function createGrid(gridCount) {
  let grid = document.querySelector("#gridContainer");
  let gridArea = gridCount * gridCount;
  grid.style.gridTemplateColumns = `repeat(${gridCount}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridCount}, 1fr)`;
 
  for (let i = 0; i < gridArea; i++) {
    let gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    grid.appendChild(gridItem);
  }

  const hoveredItems = [];

grid.addEventListener("mouseover", function(e) {
  if (e.target.classList.contains("grid-item")) {
    const index = hoveredItems.indexOf(e.target);
    if (index === -1) {
      hoveredItems.push(e.target);
      e.target.classList.add("hover-orange");
    }
  }
});

//clear the grid when clicked
clearButton.addEventListener("click", () => {
hoveredItems.forEach((item) => {
  item.classList.remove("hover-orange");

});
hovereledItems.length = 0;
gridCount = 0;
//clear all styles from the grid
const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(function(item) {
    item.removeAttribute("style");
  });
})

console.log('gridCount', gridCount);


}



// JavaScript code to add the hover-orange class to hovered elements and keep track of their state

