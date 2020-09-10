// Select color input
// Select size input




// When size is submitted by the user, call makeGrid()
// canvas = document.querySelector('#pixelCanvas').value;


function makeGrid() {
    document.addEventListener('submit', function(){
      event.preventDefault();
      var table = document.getElementById('pixelCanvas');
      // table.innerHTML = "";
      var gridHeight = document.getElementById('inputHeight').value;
      var gridWidth = document.getElementById('inputWidth').value;
      var pixelColor = document.getElementById('colorPicker');
      createCanvisGrid(gridHeight, gridWidth, table);
  });

}

function createCanvisGrid(height, width, table){
  table.innerHTML = "";
  var tableData = '';
  for(var i = 0; i < height; i++){
    tableData += '<tr>';
    // var column += document.createElement("tr");
    // column.textContent = " ";
    // document.getElementById('pixelCanvas').appendChild(column);
    for(var j = 0; j < width; j++){
      tableData += '<td></td>';
      // var row = document.createElement("td");
      // row.textContent = " ";
      // document.getElementById("pixelCanvas").appendChild(column);
      // document.getElementById("pixelCanvas").appendChild(row);
    }
    tableData += '</tr>';
// document.getElementById("pixelCanvas").appendChild(row);
   }
  table.innerHTML=tableData;
}

makeGrid();
// create a table in html
