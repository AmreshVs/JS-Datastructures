export default function StringReversal(normalString) {
  let reversedArray = [];
  let reversedString = "";

  // Logic to reverse the string with array
  this.reverse = function () {
    normalString.split("").forEach((item, index) => {
      reversedArray[normalString.length - (index + 1)] = item;
    });

    return reversedArray.join("");
  };

  // Logic to reverse the string without array
  this.reverseWithoutArray = function () {
    for (let index = normalString.length - 1; index >= 0; index--) {
      reversedString += normalString[index];
    }

    return reversedString;
  };
}