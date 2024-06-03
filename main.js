/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let numEl = document.getElementById("text-in");
let lengVal = document.querySelector(".length-out");
let volVal = document.querySelector(".volume-out");
let massVal = document.querySelector(".mass-out");
let btnEl = document.getElementById("btn");

function lengthConverter(x) {
	let feeT = x * 3.281;
	let meter = x / 3.281;
	lengVal.innerHTML = `${x} meters = ${feeT.toFixed(
		3
	)} feet | ${x} feet = ${meter.toFixed(3)} meters`;
}

function volumeConverter(x) {
	let gal = x * 0.264;
	let lit = x / 0.264;
	volVal.innerHTML = `${x} liters = ${gal.toFixed(
		3
	)} gallons | ${x} gallons = ${lit.toFixed(3)} liters`;
}

function massConverter(x) {
	let pnd = x * 2.204;
	let kil = x / 2.204;
	massVal.innerHTML = `${x} kilograms = ${pnd.toFixed(
		3
	)} pounds | ${x} pounds = ${kil.toFixed(3)} kilograms`;
}

btnEl.addEventListener("click", () => {
	let num = parseFloat(numEl.value);
	lengthConverter(num);
	volumeConverter(num);
	massConverter(num);
});
