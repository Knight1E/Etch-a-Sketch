console.log(".js file loaded successfully.")
const container = document.querySelector('#container');
const gridContainer = document.getElementById("gridContainer");

gridContainer.style.cssText = "background-color: #ddd;";

const appendTest = document.createElement("p");
appendTest.textContent = "Append text successful.";

gridContainer.appendChild(appendTest);

var gridDiv = document.createElement("div");
gridDiv.className = "flexParent"
gridDiv.style.alignItems = "center";
var gridDivP = document.createElement("p");
// gridDivP.textContent = "Flexbox created successfully.";
gridDiv.appendChild(gridDivP);
gridDiv.style.backgroundColor = "pink";
gridDiv.style.width = "500px";
gridDiv.style.height = "500px";
gridDiv.style.margin = "auto";

var gridRow = document.createElement("div");
gridRow.className = "flexKidRow";
gridRow.textContent = "Row created successfully.";
gridRow.style.cssText = "width: 90%; height: 90%; background-color: #ff82b4; margin: auto;"

/*var gridRowItem = document.createElement("div");
gridRowItem.style.cssText = "margin: auto; flex: 1; width: 100px; height: 100px; background-color: #98eb78; border-style: solid;";

gridRow.appendChild(gridRowItem);
gridRow.appendChild(gridRowItem);*/

for (let i = 0; i < 5; i++) {
    var gridRowItem = document.createElement("div");
    gridRowItem.style.cssText = "margin: auto; flex: 1; width: 10px; height: 10px; background-color: #98eb78; border-style: solid; flex-direction: row;";
    gridRow.appendChild(gridRowItem);
}

gridDiv.appendChild(gridRow);
gridContainer.appendChild(gridDiv);