import styles from "./Content.module.scss";


export default function Content(){
    return (
    <main className="container flex-fill b1">
        <h1 className="m-b-20">Découvrez nos nouvelles recettes </h1>
        <div className={styles.grid}>
            <div>Element</div>
            <div>Element</div>
            <div>Element</div>
            <div>Element</div>
            <div>Element</div>
        </div>

    </main>
    );
}
