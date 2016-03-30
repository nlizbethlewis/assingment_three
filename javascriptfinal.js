var balance;
var checks;
var overdraft;
var atm;
var orders;
var bills;
var domestic;
var international;
var output;


function corpCalc(){
	var corporate = (parseFloat(checks) * 20) + (parseFloat(overdraft) * 35) + (parseFloat(atm) * 2.75 * 12) 
	+ (parseFloat(orders) * 5) + (parseFloat(domestic) * 30) + (parseFloat(international) * 45) + (12.25 * 12),
	string = "It would cost you approximately $" + corporate + " per year to bank at a national bank, like Citibank or Chase.";
	return string;
	console.log(string);
}

function commCalc(){
	var community = (parseFloat(checks) * 20) + (parseFloat(overdraft) * 32.50) + (parseFloat(atm) * 1.375 * 12) 
	+ (parseFloat(orders) * 6.67) + (parseFloat(domestic) * 29.50) + (parseFloat(international) * 37.50),
	string = "It would cost you approximately $" + community + " per year to bank at a community bank, like Astoria or Almagamated.";
	return string;
	console.log(string);
}

function creditunionCalc(){
	var creditunion = (parseFloat(checks) * 20) + (parseFloat(overdraft) * 26) + (parseFloat(atm) * 1.50 * 12) 
	+ (parseFloat(orders) * 1.5) + (parseFloat(bills) * 1) + (parseFloat(domestic) * 25) + (parseFloat(international) * 48.30) + (5 * 12),
	string = "It would cost you approximately $" + creditunion + " per year to bank at a credit union, like the Lower East Side People's Credit Union or Qside in Queens.";
	return string;
	console.log(string);
}

function populatehtml(operationCorp){
	// corpCalc();
	// commCalc();
	 balance = document.getElementById("balance").value;
	 console.log(balance)
	 checks = document.getElementById("checks").value;
	 overdraft = document.getElementById("overdraft").value;
	 atm = document.getElementById("atm").value;
	 orders = document.getElementById("orders").value;
	 bills = document.getElementById("bills").value;
	 domestic = document.getElementById("domestic").value;
	 international = document.getElementById("international").value;
	 output = operationCorp(checks, overdraft, atm, orders, domestic, international);
	 
	 // console.log(output);
	 // corpCalc();
	 // commCalc();
	  	document.getElementById("corporate").innerText = output;

// We couldn't figure out how to get the three unique outputs to run.
	 	
// console.log(output)

	// document.getElementById("results").innerText += output;
	// console.log(orders);

	if (balance >= "$1,500"){
		document.getElementById("result").innerHTML = "Based on your inputs and monthly minimum requirements, you might benefit from banking at a national institution.";
	}
    else {
    	document.getElementById("result").innerHTML = "Based on your inputs and monthly minimum requirements, you might benefit from banking at a community or credit union institution.";
	    }
	    console.log(result)
}
// Our if/then statement isn't working properly either, and regardless of the amount entered, it returns a 'national' bank result.


// The function to run all functions below returns an "undefined" result.

// function allFunctions(){
// 	corpCalc();
// 	commCalc();
// 	// creditunionCalc();
// 	console.log(allFunctions);
// }

document.getElementById("calculate").onclick = function(){populatehtml(corpCalc)};

// document.getElementById("calculate").onclick = function(){populatehtml(allFunctions)};


// document.getElementById("calculate").onclick = function(){populatehtml(corpCalc);(commCalc)};
// document.getElementById("calculate").onclick = function(){populatehtml(commCalc)};




