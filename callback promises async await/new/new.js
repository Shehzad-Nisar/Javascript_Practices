let arr = ["Karachi", "Lahore", "Karachi", "Lahore", "Islamabad", "Hyderabad"];

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates(arr));