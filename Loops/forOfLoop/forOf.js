//let params = { [ 'name' ,  'Shafiqua naina' ] : [ 'gender' ,  'female' ] }

const params = [['name', 'Shafiqua Naina'], [ 'Gender', 'Female']]

const obj = {};
for(const [key, value] of params){
    obj[key]= value;
}

console.log(obj);