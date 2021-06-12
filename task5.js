
//ЗАДАНИЕ 5


class Device {
	constructor(power, brand){
	this.power = power;
	this.brand = brand;	
	}

	turnedOn (){
		console.log(`${this.brand} operates with a power of ${this.power} W`);
	}

	turnedOff (){
		console.log(`${this.brand} is currently turned off`);
	}
}


class TV extends Device {
	constructor(power, brand, diagonal, color){
super(power, brand);
	this.diagonal = diagonal;
	this.color = color;
	this. power = power;
	this.brand = brand;	
	}

	specs (){
		console.log(`TV brand: ${this.brand}, power ${this.power} W, diagonal ${this.diagonal}, color ${this.color}`)
	}
}


class fridge extends Device {
	constructor(power, brand, height, color){
super(power, brand);
	this.height = height;
	this.color = color;
	this. power = power;
	this.brand = brand;	
	}

specs (){
		console.log(`fridge brand: ${this.brand}, power ${this.power} W, height ${this.height}, color ${this.color}`)
	}

}

let device1 = new TV(40, 'Samsung', 55, 'black');
let device2 = new fridge(80, 'Liebherr', 180, 'silver');

 	device1.specs(); 
    device1.turnedOn(); 
    device1.turnedOff();
    device2.specs(); 
    device2.turnedOn(); 
    device2.turnedOff();