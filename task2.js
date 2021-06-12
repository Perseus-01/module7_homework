//ЗАДАНИЕ 2

let myDevices = {
laptop: 'Acer',
phone: 'Iphone',
TV: 'Samsung',
amount: 10,
}

let checkPropName = function(string, object){
return myDevices.hasOwnProperty(string);
}

alert(checkPropName('laptop', myDevices));
alert(checkPropName('phone', myDevices));
alert(checkPropName('TV', myDevices));
alert(checkPropName('tablet', myDevices));

