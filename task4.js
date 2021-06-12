
//ЗАДАНИЕ 7.4


function Device(power, brand){
	this.power = power;
	this.brand = brand;

	this.turnedOn = function(){
		console.log(`${this.brand} operates with a power of ${this.power} W`);
	}

	this.turnedOff = function(){
		console.log(`${this.brand} is currently turned off`);
	}
}


function TV(power, brand, diagonal, color){
	this.diagonal = diagonal;
	this.color = color;
	this. power = power;
	this.brand = brand;

	this.specs = function(){
		console.log(`TV brand: ${brand}, power ${power} W, diagonal ${diagonal}, color ${color}`)
	}
}

function fridge(power, brand, height, color){
	this.height = height;
	this.color = color;
	this. power = power;
	this.brand = brand;

	this.specs = function(){
		console.log(`fridge brand: ${brand}, power ${power} W, height ${height}, color ${color}`)
	}
}

TV.prototype = new Device;
fridge.prototype = new Device;

let device1 = new TV(40, 'Samsung', 55, 'black');
let device2 = new fridge(80, 'Liebherr', 180, 'silver');

 	device1.specs (); 
    device1.turnedOn(); 
    device1.turnedOff();
    device2.specs (); 
    device2.turnedOn(); 
    device2.turnedOff();


