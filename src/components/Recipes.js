import styles from "./Recipes.module.scss";
import recipe from "../assets/images/recette.jpg";

export default function Recipe(){
    return (
        <div className={styles.recipe}>
            <div className={styles.imageContainer}>
                <img src={recipe} alt="image d'une recette"/>
            </div>
            <div className={`${styles.recipeTitle} d-flex flex-row justify-center align-center`}>
                <h3>Poulet épicé et son riz gratiné</h3>
            </div>
        </div>
    );
}