import styles from "./Homepage.module.scss";
import Recipe from "./components/recipes/Recipes";
import { useState, useEffect } from 'react';
import Loading from "../../components/loading/Loading";


export default function Homepage(){
    const [recepies, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        //verifier que l'on est toujours besoin des infos lorsque le call est terminé
        let cancel = false;
        async function fetchRecipes(){
            try{
                setIsLoading(true);
                const response = await fetch("https://restapi.fr/api/recipes");
                //verifie que la reponse est ok et que cancel est à false
                if(response.ok && !cancel){
                    const recipes = await response.json();
                    //on verifie si les données qu'on recupere avec fetch sont bien contenus dans un tableau
                    // si c'est le cas, on ne fait rien sinon on mets les données dans un tableau 
                    setRecipes(Array.isArray(recipes) ? recipes : [recipes]);
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
    }, []);

    function handleInput(e){
        const filter = e.target.value;
        setFilter(filter.trim().toLowerCase());
    }

    return (
        <main className="container flex-fill p-20 d-flex flex-column">
            <h1 className="m-b-30 m-t-30">Découvrez nos nouvelles recettes </h1>
            <div className={`d-flex flex-column card p-20 flex-fill m-b-20 ${styles.contentCard}`}>
                {/*--------------------------------Barre de recherche ------------------------------------------------*/}
                <div className={`d-flex flex-row justify-center align-center m-b-20 m-t-20 ${styles.searchBar}`}>
                    <i className="fa-solid fa-magnifying-glass m-r-10"></i>
                    <input onInput={handleInput} className="flex-fill" type="text" placeholder="Rechercher" />
                </div>
                {
                    isLoading ? ( 
                        <Loading />
                    ) : (
                        <div className={styles.grid}>
                            {recepies
                            .filter(r => r.title.toLowerCase().startsWith(filter))
                            .map((r) => (
                                <Recipe key={ r._id } title={ r.title } image={ r.image }/>) )}
                        </div>
                    )
                }
            </div>
        </main>
    );
}
