


var corpChecks=20;
var corpOverdraft=35;
var corpAtm=33;
var corpOrders=5;
var corpDomestic=30;
var corpInternational=45;
var corpMonthly=147;

var commChecks=20;
var commOverdraft=32.50;
var commAtm=16.5;
var commOrders=6.67;
var commDomestic=29.50;
var commInternational=37.50;

var creditChecks=20;
var creditOverdraft=26;
var creditAtm=18;
var creditOrders=1.5;
var creditBills=1; 
var creditDomestic=25;
var creditInternational=48.30;
var creditMonthly=60;

var balance = document.getElementById("balance").value;
var checks = document.getElementById("checks").value;
var overdraft = document.getElementById("overdraft").value;
var atm = document.getElementById("atm").value;
var orders = document.getElementById("orders").value;
var bills = document.getElementById("bills").value;
var domestic = document.getElementById("domestic").value;
var international = document.getElementById("international").value;
// var output = operationCorp(checks, overdraft, atm, orders, domestic, international);


function corpCalc(){
var corporate = (checks * corpChecks)
              + (overdraft * corpOverdraft) 
		      + (atm * corpAtm) 
			  + (orders * corpOrders) 
			  + (domestic * corpDomestic) 
			  + (international * corpInternational) 
			  + (corpMonthly),
			corpString="It would cost you approximately $" + corporate + " per year to bank at a national bank, like Citibank or Chase.";
			return corpString;
			console.log(corpString);
}


function commCalc(){
var community = (checks * commChecks)
              + (overdraft * commOverdraft) 
		      + (atm * commAtm) 
			  + (orders * commOrders) 
			  + (domestic * commDomestic) 
			  + (international * commInternational),
			 commString = "It would cost you approximately $" + community + " per year to bank at a community bank, like Astoria or Almagamated.";
			 return commString;
			
}

function creditunionCalc(){
var creditunion = (checks * creditChecks)
              + (overdraft * creditOverdraft) 
		      + (atm * creditAtm) 
			  + (orders * creditOrders) 
			  + (domestic * creditDomestic) 
			  + (international * creditInternational)
			  + (creditMonthly),
			creditString = "It would cost you approximately $" + creditunion + " per year to bank at a credit union, like the Lower East Side People's Credit Union or Qside in Queens.";
			return creditString;
}




function allFunctions(){
	corpCalc();
	creditunionCalc();
	commCalc();
		
}


document.getElementById("calculate").onclick = allFunctions();
document.getElementById("corporate").innerText = corpCalc();
document.getElementById("community").innerText= commCalc();
document.getElementById("creditunion").innerText = creditunionCalc();



// function reset(){
//     document.getElementById("resetForm").reset();
// }







