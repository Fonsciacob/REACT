import getHeroById, {
    getHeroesByOwner
} from "./bases/08-imp-exp";

//Las promesas son asincronas
//const promesa = new Promise((resolve, reject) => {
//    setTimeout(()=>{
//        //Tarea : importar getHeroById
//        const hero = getHeroById(2);
//        resolve(hero);    
//        //reject('No se pudo encontrar el héroe');
//    },2000)
//});
//
//promesa.then((hero)=>{
//    console.log('hero', hero);
//}).catch(err => console.warn(err));

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //Tarea : importar getHeroById
            const hero = getHeroById(id);
            hero ? resolve(hero) :
                reject('No se pudo encontrar el héroe');
        }, 2000)
    });

}

getHeroByIdAsync(1)
    .then(console.log)
    .catch(console.warn)
    //.then(hero => console.log('Hero', hero))
    //.catch(err => console.warn(err));