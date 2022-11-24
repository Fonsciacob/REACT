//Desestructuración
//Asignación Desestructurante

const person = {
    name : 'Tony',
    age: 45,
    password: 'pass123'
}

const {name ,age, password} = person;

console.log(name);
console.log(age);
console.log(password);

const useContext = ({password,name, age, range= 'Captain'}) =>{
    //console.log(name, age, range);

    return{
        namePass: password,
        ages: age,
        latlng:{
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

//const {namePass,ages, latlng} = useContext(person);
const {namePass,ages, latlng:{lat,lng}} = useContext(person);

console.log(namePass,age);
console.log(lat,lng);
//console.log(latlng);

