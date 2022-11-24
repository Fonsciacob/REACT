const person = {
    name: 'Brayan',
    lastname: 'Mendoza',
    age: 45,
    direction:{
        city: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
};

//console.table(person);

const person2 = {...person};
person2.name = 'Peter';

console.log(person);
console.log(person2);