function startGame() {
  	const number = 9;
  	let table = document.getElementById("matrix");
  	for (let i = 1; i <= number; ++i) {
  		let newRow = table.insertRow(-1);
  		for (let j = 1; j <= number; ++j) {
        let newCell = newRow.insertCell();
        let button = document.createElement("button");
        let s1 = new String(i);
        let s2 = new String(j);
        button.setAttribute("id", s1 + s2);
        if (i % 2 != 0 && j % 2 == 0 || i % 2 == 0 && j % 2 != 0) {
          button.style.backgroundColor = "#D0D3D4";
        }
        newCell.appendChild(button);
        document.getElementById("start").disabled = true;
		}
  }
}
