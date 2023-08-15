const menuBar = document.querySelector(".menu-bar");
const menuActions = document.querySelectorAll(".menu-action");
const svgs = document.querySelectorAll("svg");
const fontSelector = document.querySelector(".font-style-selected");
const ROW_SIZE = 50;
const COLUMN_SIZE = 60;
let rowContainer = document.querySelector(".row-name-container");
let columnContainer = document.querySelector(".column-name-container");
let cellsCont = document.querySelector(".column-cell-container");
svgs.forEach((svg)=>{
  svg.classList.add("svg-fill")
})
menuBar.addEventListener("click", (e) => {
  menuActions.forEach((menuAction) => {
    menuAction.classList.remove("menu-action-active");
  });

  if (e.target.classList.contains("menu-action"))
    e.target.classList.add("menu-action-active");
});

/*populate row & columns address*/
for(let i = 1 ; i <= ROW_SIZE; i++){
  console.log(i)
    let row = document.createElement('div');
    row.classList.add('row-address');
    row.innerText = i;
    rowContainer.appendChild(row);
}

for(let i = 1 ; i <= COLUMN_SIZE; i++){
  console.log(i)
    let column = document.createElement('div');
    column.classList.add('column-address');
    column.innerText = i;
    columnContainer.appendChild(column);
}


for (let i = 0; i < ROW_SIZE; i++) {
  let rowCont = document.createElement("div");
  rowCont.setAttribute("class", "row-cont");
  for (let j = 0; j < COLUMN_SIZE; j++) {
    let cell = document.createElement("div");
    cell.setAttribute("class", "cell");
    cell.setAttribute("contenteditable", "true");
    cell.setAttribute("spellcheck", "false");

    // Attributes for cell and storage identification
    cell.setAttribute("rid", i);
    cell.setAttribute("cid", j);

    rowCont.appendChild(cell);
    //addListenerForAddressBarDisplay(cell, i, j);
  }
  cellsCont.appendChild(rowCont);
}