import styles from "./Content.module.scss";
import { data } from "../data/Recipes";
import Recipe from "./Recipes";


export default function Content(){

    const recepies = data;
    return (
    <main className="container flex-fill p-20">
        <h1 className="m-b-30 m-t-30">Découvrez nos nouvelles recettes </h1>
        <div className={`card p-20 ${styles.contentCard}`}>
            <div className={styles.grid}>
                { recepies.map(r => <Recipe title={ r.title } image={ r.image }/>) }
            </div>
        </div>
    </main>
    );
}
