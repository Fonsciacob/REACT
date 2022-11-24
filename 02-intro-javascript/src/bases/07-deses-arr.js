const personajes = ['Goku', 'Vegueta', 'Trunks'];

const [, , p3] = personajes;

console.log(p3);

const returnArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = returnArreglo();
console.log(letras, numeros);

//Tarea
//1. El primer valor del arr se llamará nombre
//2. Se llamará setNombre
const useState = (value) => {
    return [value, () => {
        console.log('Hola Mundo')
    }];
}

const [value, setNombre] = useState('Default');
console.log(value);
setNombre();