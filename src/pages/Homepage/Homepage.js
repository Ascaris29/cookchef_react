import styles from "./Homepage.module.scss";
import { data } from "../../data/Recipes";
import Recipe from "./components/recipes/Recipes";
import { useState } from 'react';


export default function Homepage(){
    const recepies = data;
    const [filter, setFilter] = useState("");

    function handleInput(e){
        const filter = e.target.value;
        setFilter(filter.trim().toLowerCase());
    }

    return (
        <main className="container flex-fill p-20">
            <h1 className="m-b-30 m-t-30">Découvrez nos nouvelles recettes </h1>
            <div className={`d-flex flex-column card p-20 ${styles.contentCard}`}>
                {/*--------------------------------Barre de recherche ------------------------------------------------*/}
                <div className={`d-flex flex-row justify-center align-center m-b-20 m-t-20 ${styles.searchBar}`}>
                    <i className="fa-solid fa-magnifying-glass m-r-10"></i>
                    <input onInput={handleInput} className="flex-fill" type="text" placeholder="Rechercher" />
                </div>
                <div className={styles.grid}>
                    {recepies
                    .filter(r => r.title.toLowerCase().startsWith(filter))
                    .map((r) => (
                        <Recipe key={ r._id } title={ r.title } image={ r.image }/>) )}
                </div>
            </div>
        </main>
    );
}
