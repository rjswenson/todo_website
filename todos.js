
//to receive data from the text field 'AddBox' and repopulate it to 'myTable'
function addList(myTable) {

  var table = document.getElementById(myTable);
  //inserts at index 0
  var row = table.insertRow(0);
  var text = document.getElementById('AddBox').value;
  var cell = row.insertCell(0);
  
  

  var element1 = document.createElement("input");
      element1.type = "text";
      element1.style.width ="100%";
      element1.value = text;
      //magic 'delete' juice below
      element1.onfocus = function() {table.deleteRow(this.parentNode.parentNode.rowIndex);}
      cell.appendChild(element1);  
}

