
import { data } from '../data/Recipes';

export default async function seedRecipes(){
    await fetch("https://restapi.fr/api/Recipes", {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        }, 
        body : JSON.stringify( data )
    })
}