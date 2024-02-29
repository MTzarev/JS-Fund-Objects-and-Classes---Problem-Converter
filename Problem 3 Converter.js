function converter(input){
let person = JSON.parse(input);

let key=Object.keys(person);
let value=Object.values(person);

for (let keys of Object.keys(person)) {
    console.log(`${keys}: ${person[keys]}`);
}


    console.log();
}
converter('{"name": "George", "age": 40, "town": "Sofia"}');
//converter('{"name": "Peter", "age": 35, "town": "Plovdiv"}');