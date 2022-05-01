function showMessage() {
	document.getElementById("result").style.display = "block";
};

function compute() {
	var principal = document.getElementById("principal").value;
	if(parseInt(principal) < 1) {
		alert("Enter a positive number");
		document.getElementById("principal").focus();
		return;
	}


	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;

	var interest = principal * years * rate / 100;

	var today = new Date();
	var yearOfWithdrawal = parseInt(today.getFullYear())+parseInt(years);

	document.getElementById("final_message").innerHTML = "If you deposit <mark>" + principal + "</mark> <br/> at an interest rate of <mark>"
                                                        + rate + "% </mark>.<br/> You wiill receive an amount of <mark>" + interest 
                                                        + "</mark>,<br/> in the year <mark>" + yearOfWithdrawal + "</mark>";

	showMessage();

	return false;
};

function showRange() {
	var rate = document.getElementById("rate").value;
	document.getElementById("ratevalue").innerHTML = rate +"%";
}