import styles from "./Homepage.module.scss";
import Recipe from "./components/recipes/Recipes";
import { useState, useContext } from 'react';
import Loading from "../../components/loading/Loading";
import { ApiContext } from "../../context/ApiContext";
import Search from "./components/recipes/Search/Search";
import useFetchData from '../../hooks/useFetchData';


export default function Homepage(){
    const [filter, setFilter] = useState("");
    const BASE_URL_API = useContext(ApiContext);
    const [page, setPage] = useState(1);
    //on invoque notre hook avec l'url et la page en paramètres
    //on recupere les données qui ont été retournées par le hook
    const [[recepies, setRecipes], isLoading] = useFetchData(BASE_URL_API, page);


    //fonction qui modifie une recette quand la recette a été likée
    // si l'id de la recette modifiée correspond à l'id de la liste de recette, on la modifie sinon on ne modifie rien 
    function updateRecipe(updatedRecipe){
        setRecipes(recepies.map((r) => r._id === updatedRecipe._id ? updatedRecipe : r))
    }

    //fonction qui vient supprimer une recette avec sa methode filter qui va créer un tableau avec les éléments dont l'id sont differents de l'id en paramètre
    function deleteRecipe(_id){
        setRecipes(
            recepies.filter((r) => r._id !== _id)
        );
    }


    return (
        <main className="container flex-fill p-20 d-flex flex-column">
            <h1 className="m-b-30 m-t-30"> Découvrez nos nouvelles recettes {' '} 
                <span className={ styles.small }> - { recepies.length } </span>
            </h1>
            <div className={`d-flex flex-column card p-20 flex-fill m-b-20 ${styles.contentCard}`}>
                {/*--------------------------------Barre de recherche ------------------------------------------------*/}
                <Search setFilter={setFilter}/>
                {
                    isLoading && !recepies.length ?( 
                        <Loading />
                    ) : (
                        <div className={styles.grid}>
                            {recepies
                            .filter(r => r.title.toLowerCase().startsWith(filter))
                            .map((r) => (
                                <Recipe 
                                    key={ r._id } 
                                    recipe={ r } 
                                    toggleLikedRecipe={ updateRecipe }
                                    deleteRecipe={ deleteRecipe }
                                /> 
                                ))}
                        </div>
                    )
                }
                <div className="d-flex flex-row justify-center align-center p-30">
                    <button onClick={ () => setPage(page + 1) } className="btn btn-primary"> Charger plus de recettes </button>
                </div>
                
            </div>
        </main>
    );
}
