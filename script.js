const form = document.querySelector("#gridCount");

const input = form.querySelector("input");
const button = form.querySelector("button");
let gridCount;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  gridCount = input.value;
  console.log(`The grid count is: ${gridCount}`);
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
}

createGrid(16);