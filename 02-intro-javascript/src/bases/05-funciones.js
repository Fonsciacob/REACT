//Funciones en JS

const saludar3 = (name) => `Hola, ${name}`;

console.log(saludar3('Brayan'));

const getUser = () =>
    ({
        uid: 'ABC123',
        username: 'Sk820'
    });

const user = getUser();
console.log(user);

//Work
//1. Transformar a una función flecha
//2. Tiene que retornar un objeto implícito
//3. Pruebas

//function getUserActive(name){
//    return{ 
//        uid:'ABC567',
//        username: name
//    }
//};

//Resolución

const getUserActive = (name) => ({
    uid: 'ABC567',
    username: name
});

const userActive = getUserActive('Brayan');
console.log(userActive);