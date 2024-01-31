function addRow() {
  var name = document.getElementById("inputNama").value;
  var dateOfBirthInput = document.getElementById("inputDate").value;
  var gender = document.querySelector('input[name="gridRadios"]:checked').value;
  var message = document.getElementById("inputPesan").value;

  // Konversi format tanggal lahir
  var dateOfBirth = convertDateFormat(dateOfBirthInput);

  var table = document.getElementById("resultTable").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.rows.length);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);

  cell1.innerHTML = name;
  cell2.innerHTML = dateOfBirth;
  cell3.innerHTML = gender;
  cell4.innerHTML = message;
  cell5.innerHTML = '<a href="#">Klik link ini</a>';
  cell6.innerHTML = '<button onclick="deleteRow(this)">Hapus</button>';
}

function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function convertDateFormat(dateString) {
  var date = new Date(dateString);
  var options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('id-ID', options);
}
