//ЗАДАНИЕ 1

let myDevices = {
laptop: 'Acer',
phone: 'Iphone',
TV: 'Samsung',
}

function getOwnProperties(myDevices) {
	for(let key in myDevices) {
		if(myDevices.hasOwnProperty(key)){
			alert(`Ключ: ${key}, значение: ${myDevices[key]}`)
		}
	}
}


getOwnProperties(myDevices); 
