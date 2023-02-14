import styles from "./Content.module.scss";
import Recipe from "./Recipes";


export default function Content(){
    return (
    <main className="container flex-fill p-20">
        <h1 className="m-b-30 m-t-30">Découvrez nos nouvelles recettes </h1>
        <div className={`card p-20 ${styles.contentCard}`}>
            <div className={styles.grid}>
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
            </div>
        </div>
    </main>
    );
}
