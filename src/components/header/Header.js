
//` 
import styles from "./Header.module.scss";
import cookchef from "../../assets/images/cookchef.jpg"
import { useState } from "react";
import HeaderMenu from "./components/menu/HeaderMenu";

export default function Header({setPage}){
    const [showMenu, setShowMenu] = useState(false);

    return (
    <header className={` ${styles.header} d-flex flex-row align-center` }> 
        <div className="flex-fill d-flex align-center" >
            <img src={cookchef} alt="logo cookchef" onClick={() => setPage("homepage")}></img>
            <h1>Cookchef</h1>
        </div>
        <ul className={styles.headerList}>
            <button onClick={ () => setPage("admin")} className="btn btn-primary">Ajouter une recette</button>
            <button className="btn btn-reverse-primary m-r-5 "><span>WishList</span><i className="fa-solid fa-heart m-l-5"></i></button>
            <button className="btn btn-primary">connexion</button>
        </ul>
        {/* lorsque que l'on clique sur le menu responsive en xs, la fonction setShowMenu passe à true et les li s'affichent à l'interieur */}
        <i onClick={ 
            () => { setShowMenu(true) }}className={`fa-solid fa-bars ${styles.headerXs}`}></i>
        { showMenu && 
        <>
        {/* lorsque le menu xs est ouvert, on crée un calque qui entourt la page entière*/}
        {/* Si on clique sur ce calque, le menu retourne sur false et se referme */}
        <div onClick={() => { setShowMenu(false) }}className="calc"></div>
        <HeaderMenu />
        </>
        }
    </header>
    
    )
}

