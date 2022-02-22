var cells = document.getElementsByTagName("span");

function xTurn(n){
	if ( cells[n].innerHTML == "X" || cells[n].innerHTML == "O")
    {

	} 
    else 
    {
		createX(n);
		checkForXWin();
		checkBoard();
		oTurn();
	}
}

function oTurn(){
		var num = Math.floor(Math.random()*9);
		if ( cells[num].innerHTML == "X" || cells[num].innerHTML == "O")
        {
			oTurn();
		} 
        else 
        {
			createO(num);
			checkForOWin();
		}
}

function createX(n)
{
		var x = document.createTextNode("X");
		cells[n].appendChild(x);
}
function createO(n)
{
		var o = document.createTextNode("O");
		cells[n].appendChild(o);
}

function checkBoard()
{
	var end = 0;
	for (var i=0;i<cells.length;i++)
    {
		if (cells[i].innerHTML !== "X" && cells[i].innerHTML !== "O")
        {
			end += 0;
		} 
        else 
        {
			end += 1;
		}
	}
console.log("end: " + end);	
	
	if (end == 9)
    {
		console.log("over");
		gameOver();
	}
}

function gameOver()
{
	document.getElementById("over").style.display = "block";
}


function checkForXWin()
{
	if (  ( cells[0].innerHTML == "X" && cells[1].innerHTML == "X" && cells[2].innerHTML == "X" ) || 
			( cells[3].innerHTML == "X" && cells[4].innerHTML == "X" && cells[5].innerHTML == "X" ) ||
		 	( cells[6].innerHTML == "X" && cells[7].innerHTML == "X" && cells[8].innerHTML == "X" ) ||
		 
		 	( cells[0].innerHTML == "X" && cells[4].innerHTML == "X" && cells[8].innerHTML == "X" ) ||
		 	( cells[2].innerHTML == "X" && cells[4].innerHTML == "X" && cells[6].innerHTML == "X" ) ||
		 
		 	( cells[0].innerHTML == "X" && cells[3].innerHTML == "X" && cells[6].innerHTML == "X" ) ||
		 	( cells[1].innerHTML == "X" && cells[4].innerHTML == "X" && cells[7].innerHTML == "X" ) ||
		 	( cells[2].innerHTML == "X" && cells[5].innerHTML == "X" && cells[8].innerHTML == "X" )  ){
		 
		document.getElementById("over").style.display ="block";
		document.getElementById("text").innerHTML = "You win!";
	}
}


function checkForOWin()
{
	if (  ( cells[0].innerHTML == "O" && cells[1].innerHTML == "O" && cells[2].innerHTML == "O" ) || 
			( cells[3].innerHTML == "O" && cells[4].innerHTML == "O" && cells[5].innerHTML == "O" ) ||
		 	( cells[6].innerHTML == "O" && cells[7].innerHTML == "O" && cells[8].innerHTML == "O" ) ||
		 
		 	( cells[0].innerHTML == "O" && cells[4].innerHTML == "O" && cells[8].innerHTML == "O" ) ||
		 	( cells[2].innerHTML == "O" && cells[4].innerHTML == "O" && cells[6].innerHTML == "O" ) ||
		 
		 	( cells[0].innerHTML == "O" && cells[3].innerHTML == "O" && cells[6].innerHTML == "O" ) ||
		 	( cells[1].innerHTML == "O" && cells[4].innerHTML == "O" && cells[7].innerHTML == "O" ) ||
		 	( cells[2].innerHTML == "O" && cells[5].innerHTML == "O" && cells[8].innerHTML == "O" )  ){
		 
		document.getElementById("over").style.display = "block";
		document.getElementById("text").innerHTML = "You lose!";
	}
}