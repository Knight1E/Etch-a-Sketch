console.log(".js file loaded successfully.")
const container = document.querySelector('#container');
const gridContainer = document.getElementById("gridContainer");

// gridContainer.style.cssText = "background-color: #ddd;";

const appendTest = document.createElement("div");
// appendTest.textContent = "Append text successful.";

const inputText = document.createElement("p");
inputText.textContent = "How many squares? (ex. for a 5 x 5 grid, enter 5.)";
inputText.marginBottom = "5px";
gridContainer.appendChild(inputText);

const inputBar = document.createElement("input");
inputBar.style.marginRight = "5px";

const numberButton = document.createElement("button");
numberButton.textContent = "Update";
appendTest.appendChild(numberButton);

const inputSpan = document.createElement("span");
inputSpan.appendChild(inputBar);
inputSpan.appendChild(numberButton);
inputSpan.style.marginBottom = "20px";
gridContainer.appendChild(inputSpan);
// inputSpan.style.cssText = "text-align: center;";

var gridDiv = document.createElement("div");
gridDiv.className = "flexParent"
gridDiv.style.alignItems = "center";
var gridDivP = document.createElement("p");
// gridDivP.textContent = "Flexbox created successfully.";
gridDiv.appendChild(gridDivP);
gridDiv.style.backgroundColor = "pink";
gridDiv.style.width = "300px";
gridDiv.style.height = "300px";
gridDiv.style.margin = "auto";

var gridRow = document.createElement("div");
gridRow.className = "flexKidRow";
// gridRow.textContent = "Row created successfully.";
gridRow.style.cssText = "width: 90%; height: 90%; background-color: #ff82b4; margin: auto;"

/*var gridRowItem = document.createElement("div");
gridRowItem.style.cssText = "margin: auto; flex: 1; width: 100px; height: 100px; background-color: #98eb78; border-style: solid;";

gridRow.appendChild(gridRowItem);
gridRow.appendChild(gridRowItem);*/

// Testing the grid w/ manual input.
var gridSizeNumber = 16;

function fillIn(item) {
    item.style.backgroundColor = "blue";
}

function createGrid () {
    for (let i = 0; i < gridSizeNumber; i++) {
        let gridSize = (100 / gridSizeNumber) + "%"; // We'd replace the 5 width the # of squares we'd have.
        var gridRowLoop = document.createElement("div");
        gridRowLoop.style.cssText = "width: 100%; height: 100%; background-color: blue; margin: auto;";
    
        // A row of 5
        for (let i = 0; i < gridSizeNumber; i++) {
            var gridRowItem = document.createElement("div");
            gridRowItem.style.cssText = "margin: auto; flex: 1; width: 100%; border-style: solid; margin-bottom: -2px;";
            gridRowItem.style.height = gridSize;
            gridRowItem.className = "sketchSquare";
    
            gridRowItem.onmouseover = function(item) {
                return function() {
                    fillIn(item);
                };
    
            }(gridRowItem);
            
    
            gridRowLoop.appendChild(gridRowItem);
        }
    
        gridDiv.appendChild(gridRowLoop);
    }
}

createGrid();


// gridDiv.appendChild(gridRow);
gridContainer.style.cssText = "flex-direction: column; align-items: center;";
gridContainer.className = "flexParent";
gridContainer.appendChild(gridDiv);