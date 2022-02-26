const multiplier = {
  numbers: [3, 553, 12, 77, 93, 33, 56],
  multiplyBy: 3,
  multiply() {
  return this.numbers.map((number) => number * this.multiplyBy)
  }
}

console.log(multiplier.multiply())