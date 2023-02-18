import styles from "./Recipes.module.scss";
import { useState } from 'react';

export default function Recipe({title, image}){

    const [liked, setLiked] = useState(false);

    function handleClick(){
        // au clic, cela passe l'état à true puis à false etc car c'est l'inverse de ce qui est dans l'état au clic 
        // si l'état est sur true, le coeur devient rouge
        setLiked(!liked);
    } 
    return (
        <div className={styles.recipe} onClick={handleClick}>
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