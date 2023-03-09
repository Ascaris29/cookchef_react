import { useContext } from "react";
import { ApiContext } from "../../../../context/ApiContext";
import styles from "./Recipes.module.scss";


export default function Recipe({ recipe : { _id, liked, title, image}, toggleLikedRecipe, deleteRecipe}){

    const BASE_URL_API = useContext(ApiContext);

    //fonction qui patche les recettes de l'api
    //modifie l'état du like à l'intérieur de l'api 
    async function handleClickLike(){
        try{
            const response = await fetch(`${BASE_URL_API}/${ _id}`, {
                method : 'PATCH',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    liked : !liked,
                })
            })
            if(response.ok){
                const updatedRecipe = await response.json();
                toggleLikedRecipe(updatedRecipe);
            }
        }catch(e){
            console.log('erreur');
        }
    }
    //id recupéré par les propriétés de la fonction recipe
    async function handleClickDelete(e){
        e.stopPropagation();
        try{
            const response = await fetch(`${BASE_URL_API}/${ _id}`, {
                method : 'DELETE'
            })
            if (response.ok){
                deleteRecipe(_id);
            }
        }catch(e){
            console.log('error !')
        }
    }
    return (
        <div className={styles.recipe} onClick={handleClickLike}>
            <i className="fa-solid fa-xmark" onClick={ handleClickDelete }></i>
            <div className={styles.imageContainer}>
                <img src={ image } alt=""/>
            </div>
            <div className={`${styles.recipeTitle} d-flex flex-column justify-center align-center`}>
                <h3 className="m-b-10">{ title }</h3>
                <i className={` fa-solid fa-heart ${ liked ? 'text-primary' : " "}` }></i>          
            </div>
        </div>
    );
}