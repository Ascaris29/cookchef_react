import styles from "./Homepage.module.scss";
import Recipe from "./components/recipes/Recipes";
import { useState, useEffect, useContext } from 'react';
import Loading from "../../components/loading/Loading";
import { ApiContext } from "../../context/ApiContext";
import Search from "./components/recipes/Search/Search";


export default function Homepage(){
    const [recepies, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState("");
    const BASE_URL_API = useContext(ApiContext);
    const [page, setPage] = useState(1);

    useEffect(() => {
        //verifier que l'on est toujours besoin des infos lorsque le call est terminé
        let cancel = false;
        async function fetchRecipes(){
            try{
                setIsLoading(true);
                const response = await fetch(`${BASE_URL_API}?skip=${(page - 1) * 18}&limit=18`);
                //verifie que la reponse est ok et que cancel est à false
                if(response.ok && !cancel){
                    const newRecipes = await response.json();
                     //absolument RC, donc à revoir 
                    setRecipes((x) => 
                        Array.isArray(newRecipes)
                         ? [...x, ...newRecipes]
                         : [...x, newRecipes]
                    );
                }
            }catch(e){
                console.log("erreur");
            }finally{
                if(!cancel){
                    setIsLoading(false);
                }
                
            }
        }
        fetchRecipes();
        //fonction de clean up
        //je ne veux plus recuperer les informations
        return () => (cancel = true);
        //tant que mon fetch ne change pas, nous ne faisons plus rien
        //tant que ma page ne change pas, ne change rien
    }, [BASE_URL_API, page]);

    //fonction qui modifie une recette quand la recette a été likée
    // si l'id de la recette modifiée correspond à l'id de la liste de recette, on la modifie sinon on ne modifie rien 
    function updateRecipe(updatedRecipe){
        setRecipes(recepies.map((r) => r._id === updatedRecipe._id ? updatedRecipe : r))
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
                                <Recipe key={ r._id } recipe={ r } toggleLikedRecipe={ updateRecipe }/> 
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
