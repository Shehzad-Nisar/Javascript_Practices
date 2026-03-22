// let arr1= [1,2,3,5];
// //coping array to another array:
// let arr2 = [...arr1];
// //coping array to another array without changing the origional a
// console.log(arr2)

// // combine two arrays;
// let arr3 = [5,6,7];
// let arr4 = [10,...arr1,...arr3]
// console.log(arr4)


const obj1 = {
    name: 'ali ',
    age:33
}
const obj2 = {gFather: 'ali khan',age: 66,...obj1,fName:'muhammad',age: 53};

console.log(obj2)


const str = 'helloBaltistan';
const newstr= [...str];
console.log(newstr)