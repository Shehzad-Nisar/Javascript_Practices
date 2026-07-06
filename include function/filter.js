
const students = [
    'ali',
    'ahmed',
    'raza',
    'mushahid',
    'zeeshan',
    'babar'
]

const search = "a";

const filtered = students.map((students) =>{
    students.toLocaleLowerCase().includes(search.toLocaleLowerCase);
})

console.log(filtered);