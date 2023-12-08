console.log(data);

//Класс Транспорт
class Transport {
	constructor(type, price, brand) {
		this.type = type;
		this.price = price;
		this.brand = brand;
	}

	getInfo() {
		return `Тип: ${this.type}, Бренд: ${this.brand}`;
	}
}

let tr = new Transport('маниша', 3000, 'oop', 'link');
tr.getPrice();

Transport.prototype.getPrice = function () {
	return `Цена: ${this.price}`;
};

//Класс Car, наследующий от класса Транспорт
class Car extends Transport {
	constructor(type, price, brand, doors) {
		super(type, price, brand);
		this.doors = doors;
	}
}

Car.prototype.getDoorsCount = function () {
	return `Количество дверей: ${this.doors}`;
};

let car = new Car('машина', 2000, 'Opel', 'ссылка', 4);

//Класс Bike, наследующий от класса Транспорт
class Bike extends Transport {
	constructor(type, price, brand, maxSpeed) {
		super(type, price, brand);
		this.maxSpeed = maxSpeed;
	}
}

Bike.prototype.getMaxSpeed = function () {
	return `Максимальная скорость: ${this.maxSpeed}`;
};

let bike = new Bike('мопед', 5000, 'Vespa', 'ссылка', 100);
let bikeOne = new Bike('мопед', 200, 'Vespa', 'ссылка', 60);

const vehicles = data.map((vehicle) => {
	if (vehicle.type === 'car') {
		return new Car(vehicle.type, vehicle.price, vehicle.brand, vehicle.doors);
	} else if (vehicle.type === 'bike') {
		return new Bike(vehicle.type, vehicle.price, vehicle.brand, vehicle.maxSpeed);
	}
});

vehicles.forEach((vehicle) => {
	console.log(vehicle.getInfo());
	console.log(vehicle.getPrice());
	if (vehicle instanceof Car) {
		console.log(vehicle.getDoorsCount());
	}
	if (vehicle instanceof Bike) {
		console.log(vehicle.getMaxSpeed());
	}
});