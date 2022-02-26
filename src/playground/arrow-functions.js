import full from "@babel/core/lib/config/full";

function getFirstName(fullName) {
  return fullName.split(" ")[0];
}
console.log(getFirstName("Mike Myers"));

const getFirstNameArrow1 = (fullName) => {
  return fullName.split(" ")[0]
}
console.log(getFirstNameArrow1("Leonardo Smith"));

const getFirstNameArrow2 = (fullName) => fullName.split(" ")[0];
console.log(getFirstNameArrow("Janet Jackson"))