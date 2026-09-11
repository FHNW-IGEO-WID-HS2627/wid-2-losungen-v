// Teil 1
const numberArray = [1, 2, 3];
const resultArray = numberArray.map((number) => number * 3);
console.log(resultArray);

const resultArrayWithIndex = numberArray.map((number, index) => number * index);
console.log(resultArrayWithIndex);

// --------------

// Teil 2
const userList = ["Tim", "Anna", "Karim", "Amna", "George"];

const filteredUserList = userList.filter((username) => username.includes("a"));
console.log(filteredUserList);
