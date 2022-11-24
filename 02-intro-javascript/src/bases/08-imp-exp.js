//import {heroes} from './data/heroes';
import heroes/*, {owners}*/ from "../data/heroes";

//console.log(owners);

const getHeroById = (id) => heroes.find((hero) => hero.id === id);
//console.log(getHeroById(3));

//find ? , filter
const getHeroesByOwner = (owner) => heroes.filter((hero) => hero.owner === owner);
//console.log(getHeroesByOwner('DC'));

export{
    getHeroById as default,
    getHeroesByOwner
}