const name = 'Brayan';
const lastname = 'Mendoza';

//const nameComplete = name + ' ' + lastname;
const nameComplete = `${name} ${lastname}`;

console.log(nameComplete);

function getSaludo(name){
    return 'Hola ' + name;
}

console.log(`Este es un texto: ${getSaludo(name)}`);