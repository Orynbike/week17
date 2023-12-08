// Задание 1
// Создайте класс Worker. Класс должен содержать свойства name, surname. Создайте на его основе объект worker. Выведите в консоль созданный объект.
// Подсказка: имена классов пишем с большой буквы

/*class Worker {
	constructor(name, surname) {
	  this.name = name;
	  this.surname = surname;
	}
  }
  let worker = new Worker('Leila', 'Maksut');
  console.log(worker);*/

//Задание 2
//Добавьте в класс Worker метод fullName, который будет возвращать полное имя работника в формате "Фамилия, Имя". Создайте объект worker2 на основе класса Worker и выведите его полное имя в консоль с помощью метода fullName
  class Worker {
	constructor(firstName, lastName, position) {
	  this.firstName = firstName;
	  this.lastName = lastName;
	  this.position = position;
	}
  
	fullName() {
	  return `${this.lastName}, ${this.firstName}`;
	}
  }
  
  const worker2 = new Worker("Maksut", "Abulkhair", "Developer");
  
  console.log("Фамилия, Имя", worker2.fullName());
  
//Задание 3
//Создайте класс Car. Класс должен содержать свойства brand, model и year. Создайте на его основе объект car и выведите его свойства в консоль.

class Car {
	constructor (brand, model, year){
		this.brand = brand;
		this.model = model;
		this.year = year;
    }
}
const car = new Car("Toyota", "Camry", 2022);

console.log("Car properties:");
console.log("Brand: ", car.brand);
console.log("Model: ", car.model);
console.log("Year: ", car.year);


//Задание 4
//Добавьте в класс Car метод getAge, который будет возвращать возраст машины (текущий год минус год выпуска). Создайте объект car2 на основе класса Car и выведите его возраст в консоль с помощью метода getAge.

/*class Car {
	constructor(brand, model, year) {
	  this.brand = brand;
	  this.model = model;
	  this.year = year;
	}
  
	getAge() {
	  const currentYear = new Date().getFullYear();
	  return currentYear - this.year;
	}
  }
//Создаём объект car2 на основе класса Car
const car2 = new Car('Brand', 'Model', 2010);
//Выводим возраст объекта car2 в консоль с помощью метода getAge
console.log(car2.getAge());*/

//Задание 5
//Создайте класс Rectangle. Класс должен содержать свойства width и height. Создайте на его основе объект rectangle и выведите его свойства в консоль.

/*class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height =height;
	}
}
const rectangle = new Rectangle (10, 20)

console.log("Rectangle properties:");
console.log("Width: ", rectangle.width);
console.log("Height: ", rectangle.height);*/


//Задание 6
//Добавьте в класс Rectangle метод getArea, который будет возвращать площадь прямоугольника (произведение ширины и высоты). Создайте объект rectangle2 на основе класса Rectangle и выведите его площадь в консоль с помощью метода getArea.

class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height =height;
	}

getArea() {
    return this.width * this.height;
  }
}

const rectangle2 = new Rectangle(8, 4);

console.log("Rectangle's area:", rectangle2.getArea());

//Задание 7
//Создайте класс Circle. Класс должен содержать свойство radius. Создайте на его основе объект circle и выведите его свойство в консоль.

/*class Circle {
	constructor(radius) {
	  this.radius = radius;
	}
  }
  
  const circle = new Circle(5);
  
  console.log("Circle properties:");
  console.log("Radius: ", circle.radius);*/
  

//Задание 8
//Добавьте в класс Circle метод calculateArea, который будет вычислять и возвращать площадь круга. Формула для расчета площади круга: площадь = радиус * радиус * 3.14. Создайте объект circle2 на основе класса Circle с радиусом 3 и выведите его площадь круга в консоль с помощью метода calculateArea.

class Circle {
	constructor(radius) {
	  this.radius = radius;
	}
  
	calculateArea() {
	  return Math.PI * this.radius ** 2;
	}
  }

  const circle2 = new Circle(3);
  
  console.log("Circle's area:", circle2.calculateArea());
  
//Задание 9
//Создайте класс Student. Класс должен содержать свойства name, age и grade. Создайте на его основе объект student и выведите его свойства в консоль.

/*class Student {
	constructor(name, age, grade) {
	  this.name = name;
	  this.age = age;
	  this.grade = grade;
	}
  }
  
  const student = new Student("Leila", 20, "A");
  
  console.log("Student properties:");
  console.log("Name: ", student.name);
  console.log("Age: ", student.age);
  console.log("Grade: ", student.grade);*/
  

//Задание 10
//Добавьте в класс Student метод increaseGrade, который будет увеличивать текущую оценку на 1. Создайте объект student2 на основе класса Student, увеличьте его оценку с помощью метода increaseGrade и выведите новую оценку в консоль.

class Student {
	constructor(name, age, grade) {
	  this.name = name;
	  this.age = age;
	  this.grade = grade;
	}
  
	increaseGrade() {
	  this.grade += 1;
	}
  }
  
  const student2 = new Student("Dinara", 21, "B");
  
  student2.increaseGrade();
  
  console.log("Student's new grade:", student2.grade);
  

//Задание 11
//Создайте класс Book. Класс должен содержать свойства title, author и year. Создайте на его основе объект book и выведите его свойства в консоль.

/*class Book {
	constructor(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;
	}
  }
  
  const book = new Book("Война и мир", "Толстой", 1925);
  
  console.log("Book properties:");
  console.log("Title: ", book.title);
  console.log("Author: ", book.author);
  console.log("Year: ", book.year);*/
  

//Задание 12
//Добавьте в класс Book метод getTitleAndAuthor, который будет возвращать строку в формате "Название книги - Автор". Создайте объект book2 на основе класса Book и выведите его название и автора в консоль с помощью метода getTitleAndAuthor.

class Book {
	constructor(title, author, year) {
	  this.title = title;
	  this.author = author;
	  this.year = year;
	}
  
	getTitleAndAuthor() {
	  return `${this.title} - ${this.author}`;
	}
  }
  
  const book2 = new Book("Золотая рыбка", "Пушкин", 1920);
  
  console.log("Book title and author:", book2.getTitleAndAuthor());
  

//Задание 13
//Создайте класс BankAccount. Класс должен содержать свойства accountNumber и balance. Создайте на его основе объект account и выведите его свойства в консоль.

/*class BankAccount {
	constructor(accountNumber, balance) {
	  this.accountNumber = accountNumber;
	  this.balance = balance;
	}
  }
  
  const account = new BankAccount("123456789", 1000);
  
  console.log("Account properties:");
  console.log("Account Number: ", account.accountNumber);
  console.log("Balance: $", account.balance);*/
  

//Задание 14
//Добавьте в класс BankAccount метод deposit, который будет увеличивать баланс на заданную сумму. Создайте объект account2 на основе класса BankAccount, пополните его баланс с помощью метода deposit и выведите новый баланс в консоль.

/*class BankAccount {
	constructor(accountNumber, balance) {
	  this.accountNumber = accountNumber;
	  this.balance = balance;
	}
  
	deposit(amount) {
	  this.balance += amount;
	}
  }
  
  const account2 = new BankAccount("987654321", 500);
  
  account2.deposit(200);
  
  console.log("New balance: $", account2.balance);*/
  

//Задание 15
//В класс BankAccount добавлен метод withdraw, который уменьшает баланс на заданную сумму. Если запрошенная сумма превышает текущий баланс, выведите сообщение "Недостаточно средств". Создайте объект account3 на основе класса BankAccount, попробуйте снять с него сумму, превышающую баланс, и выведите соответствующее сообщение в консоль.

class BankAccount {
	constructor(balance) {
	this.balance = balance;
	}

	withdraw(amount) {
	if (amount <= this.balance) {
		this.balance -= amount;
	} else {
		console.log("Недостаточно средств");
	}
	}
    }
    const account3 = new BankAccount(1500);

    account3.withdraw(2000);


    console.log("Balance after withdrawal attempt: $", account3.balance);

//Задание 16
//Создайте класс Animal. Класс должен содержать свойства name и sound. Создайте на его основе объект animal и выведите его свойства в консоль.

/*class Animal {
	constructor(name, sound) {
	this.name = name;
	this.sound = sound;
	}
  }
  
  const animal = new Animal("Lion", "Roar");
  
  console.log("Animal properties:");
  console.log("Name: ", animal.name);
  console.log("Sound: ", animal.sound);*/
  

//Задание 17
//Добавьте в класс Animal метод makeSound, который будет выводить в консоль звук животного. Создайте объект animal2 на основе класса Animal и вызовите метод makeSound.

class Animal {
	constructor(name, sound) {
	  this.name = name;
	  this.sound = sound;
	}
  
	makeSound() {
	  console.log(this.sound);
	}
  }
  
  const animal2 = new Animal("Dog", "Woof");
  
  animal2.makeSound();
  

//Задание 18
//Создайте класс Point. Класс должен содержать свойства x и y. Создайте на его основе объект point и выведите его свойства в консоль.

/*class Point {
	constructor(x, y) {
	  this.x = x;
	  this.y = y;
	}
  }
  
  const point = new Point(3, 5);
  
  console.log("Point properties:");
  console.log("x: ", point.x);
  console.log("y: ", point.y);*/
  
//Задание 19
//В классе Point добавлен метод getDistance, который будет возвращать расстояние от точки до начала координат (0,0). Создайте объект point2 на основе класса Point и выведите его расстояние до начала координат с помощью метода getDistance.

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	// Метод getDistance возвращает расстояние от точки до начала координат (0,0)
	getDistance() {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}
}

const point2 = new Point(4, 3);

console.log("Distance to the origin:", point2.getDistance());


//Задание 20
//Создайте класс Calculator. Класс должен содержать методы add, subtract, multiply и divide, которые будут выполнять соответствующие математические операции над двумя числами и возвращать результат. Создайте объект calculator на основе класса Calculator, вызовите каждый из методов и выведите результаты в консоль.

class Calculator {
	add(a, b) {
	  return a + b;
	}
  
	subtract(a, b) {
	  return a - b;
	}
  
	multiply(a, b) {
	  return a * b;
	}
  
	divide(a, b) {
	  if (b !== 0) {
		return a / b;
	  } else {
		console.log("Error: Division by zero");
		return undefined;
	  }
	}
  }
  
  const calculator = new Calculator();
  
  console.log("Addition:", calculator.add(5, 3));
  console.log("Subtraction:", calculator.subtract(8, 2));
  console.log("Multiplication:", calculator.multiply(4, 6));
  console.log("Division:", calculator.divide(10, 2));
  

//Задание 21
//Создайте класс Person. Класс должен содержать свойства name, age и city. Создайте на его основе объект person и выведите его свойства в консоль.

/*class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
}

const person = new Person("John Doe", 25, "New York");

console.log("Person properties:");
console.log("Name: ", person.name);
console.log("Age: ", person.age);
console.log("City: ", person.city);*/


//Задание 22
//Добавьте в класс Person метод changeCity, который будет изменять значение свойства city на новое значение. Создайте объект person2 на основе класса Person, вызовите метод changeCity с аргументом "New York" и выведите новое значение свойства city в консоль.

class Person {
	constructor(name, age, city) {
	  this.name = name;
	  this.age = age;
	  this.city = city;
	}
  
	changeCity(newCity) {
	  this.city = newCity;
	}
  }
  
  const person2 = new Person("Альбина", 30, "Los Angeles");
  
  person2.changeCity("New York");
  
  console.log("New city:", person2.city);
  

//Задание 23
//Создайте класс Employee. Класс должен содержать свойства name, position и salary. Создайте на его основе объект employee и выведите его свойства в консоль.
//Подсказка: Используйте методы класса, чтобы создать объект employee и вывести его свойства.

/*class Employee {
	constructor(name, position, salary) {
	  this.name = name;
	  this.position = position;
	  this.salary = salary;
	}
  }
  
  const employee = new Employee("Alice", "Manager", 50000);
  
  console.log("Employee properties:");
  console.log("Name: ", employee.name);
  console.log("Position: ", employee.position);
  console.log("Salary: $", employee.salary);*/
  
//Задание 24
//Добавьте в класс Employee метод calculateBonus, который будет принимать процент бонуса и увеличивать зарплату сотрудника на соответствующую сумму. Создайте объект employee2 на основе класса Employee и вызовите метод calculateBonus с процентом 10. Выведите новую зарплату сотрудника в консоль.
//Подсказка: Используйте метод call или apply, чтобы вызвать метод calculateBonus для объекта employee2 и передать процент бонуса.

class Employee {
	constructor(name, position, salary) {
	  this.name = name;
	  this.position = position;
	  this.salary = salary;
	}
  
	calculateBonus(percent) {
	  const bonus = (percent / 100) * this.salary;
	  this.salary += bonus;
	}
  }
  
  const employee2 = new Employee("Bob", "Developer", 60000);
  
  employee2.calculateBonus(10);
  
  console.log("New salary after bonus: $", employee2.salary);
  

//Задание 25
//Создайте класс Product. Класс должен содержать свойства name, price и quantity. Создайте на его основе объект product и выведите его свойства в консоль.
//Подсказка: Используйте методы класса, чтобы создать объект product и вывести его свойства.

/*class Product {
	constructor(name, price, quantity) {
	  this.name = name;
	  this.price = price;
	  this.quantity = quantity;
	}
  }

  const product = new Product("Телефон", 630, 50);
  

  console.log("Product properties:");
  console.log("Name: ", product.name);
  console.log("Price: $", product.price);
  console.log("Quantity: ", product.quantity);*/
  

//Задание 26
//Добавьте в класс Product метод calculateTotalPrice, который будет возвращать общую стоимость продукта (произведение цены на количество). Создайте объект product2 на основе класса Product с ценой 10 и количеством 5. Выведите общую стоимость продукта в консоль с помощью метода calculateTotalPrice.

class Product {
	constructor(name, price, quantity) {
	  this.name = name;
	  this.price = price;
	  this.quantity = quantity;
	}
  
	calculateTotalPrice() {
	  return this.price * this.quantity;
	}
  }
  
  const product2 = new Product("Book", 10, 5);
  

  console.log("Total price:", product2.calculateTotalPrice());
  

//Задание 27
//Создайте класс Triangle. Класс должен содержать свойства side1, side2 и side3, которые представляют длины сторон треугольника. Создайте на его основе объект triangle и выведите его свойства в консоль.
/*class Triangle {
	constructor(side1, side2, side3) {
	  this.side1 = side1;
	  this.side2 = side2;
	  this.side3 = side3;
	}
  }
  
  const triangle = new Triangle(3, 4, 5);
  
  console.log("Triangle properties:");
  console.log("Side 1: ", triangle.side1);
  console.log("Side 2: ", triangle.side2);
  console.log("Side 3: ", triangle.side3);*/
  

//Задание 28
//Добавьте в класс Triangle метод calculatePerimeter, который будет возвращать периметр треугольника (сумма длин всех сторон). Создайте объект triangle2 на основе класса Triangle со сторонами 3, 4 и 5. Выведите периметр треугольника в консоль с помощью метода calculatePerimeter.
class Triangle {
	constructor(side1, side2, side3) {
	  this.side1 = side1;
	  this.side2 = side2;
	  this.side3 = side3;
	}
  
	calculatePerimeter() {
	  return this.side1 + this.side2 + this.side3;
	}
  }
  
  const triangle2 = new Triangle(3, 4, 5);
  
  console.log("Triangle perimeter:", triangle2.calculatePerimeter());
  

//Задание 29
//Создайте класс Square. Класс должен содержать свойство side, представляющее длину стороны квадрата. Создайте на его основе объект square и выведите его свойство в консоль.

/*class Square {
	constructor(side) {
	  this.side = side;
	}
  }
  
  const square = new Square(5);
  
  console.log("Square property:");
  console.log("Side length: ", square.side);*/
  

//Задание 30
//Добавьте в класс Square метод calculateArea, который будет вычислять и возвращать площадь квадрата (произведение длины стороны на саму себя). Создайте объект square2 на основе класса Square со стороной 5 и выведите его площадь квадрата в консоль с помощью метода calculateArea.
class Square {
	constructor(side) {
	  this.side = side;
	}
  
	calculateArea() {
	  return this.side * this.side;
	}
  }
  const square2 = new Square(5);
  
  console.log("Square area:", square2.calculateArea());
  
