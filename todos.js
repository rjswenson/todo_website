
//to receive data from the text field 'AddBox' and repopulate it to 'myTable'
function addList(myTable) {

  var table = document.getElementById(myTable);
  var row = table.insertRow(0);

  var text = document.getElementById('AddBox').value;

  var cell = row.insertCell(0);
    var element1 = document.createElement("input");
      element1.type = "text";
      element1.style.width ="100%";
      element1.value = text;
      cell.appendChild(element1);  
}

//to delete a row by checking a box
function deleteRow(row)  {

  var row = row.parentNode.parentNode;
  row.parentNode.removeChild(row);

}