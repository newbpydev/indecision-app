

class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}.`
  }
  getDescription() {
    return `${this.name} is ${this.age} ${this.age > 1 ? "years" : "year"} old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation;
  }
  hasLocation() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.hasLocation()) {
      greeting += ` I am visiting from ${this.homeLocation}.`
    }

    return greeting;
  }
}

const traveler = new Traveler("John Snow", 37, "Winterfall")
traveler
traveler.getGreeting(); //?
traveler.getDescription(); //?
traveler.hasLocation(); //?

const nonTraveler = new Traveler("Maria", 17)
nonTraveler
nonTraveler.getGreeting(); //?
nonTraveler.getDescription(); //?
nonTraveler.hasLocation(); //?

const me = new Student("Juan Gomez", 39, "Software Engineer"); //?
me
me.getGreeting(); //?
me.getDescription(); //?
me.hasMajor(); //?

const you = new Student(); //?
you
you.getGreeting(); //?
you.getDescription(); //?
you.hasMajor(); //?

