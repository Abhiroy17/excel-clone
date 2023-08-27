let menuBar = document.querySelector(".menu-bar");
const menuActions = document.querySelectorAll(".menu-action");
const svgs = document.querySelectorAll("svg");
const fontSelector = document.querySelector(".font-style-selected");
const ROW_SIZE = 50;
const COLUMN_SIZE = 702;
let rowContainer = document.querySelector(".row-name-container");
let columnContainer = document.querySelector(".column-name-container");
let cellsCont = document.querySelector(".column-cell-container");
let rowsContainer = document.querySelector(".rows-container");
let addressBar = document.querySelector(".address-bar");
svgs.forEach((svg) => {
  svg.classList.add("svg-fill");
});
menuBar.addEventListener("click", (e) => {
  menuActions.forEach((menuAction) => {
    menuAction.classList.remove("menu-action-active");
  });

  if (e.target.classList.contains("menu-action"))
    e.target.classList.add("menu-action-active");
});

/*populate row & columns address*/
for (let i = 1; i <= ROW_SIZE; i++) {
  
  let row = document.createElement("div");
  row.classList.add("row-address");
  row.innerText = i;
  rowContainer.appendChild(row);
}

for (let i = 1; i <= COLUMN_SIZE; i++) {
  
  let column = document.createElement("div");
  column.classList.add("column-address");
  column.innerText = getColumnAddress(i);
  columnContainer.appendChild(column);
}

for (let i = 1; i <= ROW_SIZE; i++) {
  let rowCont = document.createElement("div");
  rowCont.setAttribute("class", "row-cont");
  for (let j = 1; j <= COLUMN_SIZE; j++) {
    let cell = document.createElement("div");
    cell.setAttribute("class", "cell");
    cell.setAttribute("contenteditable", "true");
    cell.setAttribute("spellcheck", "false");

    // Attributes for cell and storage identification
    cell.setAttribute("rid", i);
    cell.setAttribute("cid", j);

    rowCont.appendChild(cell);
    addListenerForAddressBarDisplay(cell, i, j);
  }
  rowsContainer.appendChild(rowCont);
  // cellsCont.appendChild(rowCont);
}
let prevCell = null;
function addListenerForAddressBarDisplay(cell, i, j) {
  cell.addEventListener("click", (evt) => {
    /*To avoid using for-loop to remove active class on cell
    removing active class from previous clicked cell & updating current clicked cell
    */
    if (prevCell) prevCell.classList.remove("cell-active");

    let rowAddress = i ;
    let columnAddress = getColumnAddress(j);
    addressBar.value = `${columnAddress}${rowAddress}`;
    cell.classList.add("cell-active");
    prevCell = cell;
  });
}

function getColumnAddress(columnNumber) {
  columnNumber = parseInt(columnNumber);
  
  let columnAddress = "";
  while (columnNumber > 0) {
    let rem = columnNumber % 26;
    if (rem == 0) {
      columnAddress = "Z" + columnAddress;
      columnNumber = Math.floor(columnNumber / 26) - 1;
    } else {columnAddress = String.fromCharCode(rem - 1 + 65) + columnAddress;
    columnNumber = Math.floor(columnNumber / 26);
    }
  }
  
  return columnAddress;
}

