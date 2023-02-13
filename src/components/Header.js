
//` 
import styles from "./Header.module.scss";
import cookchef from "../assets/images/cookchef.jpg"

export default function Header(){
    return (
    <header className={` ${styles.header} d-flex flex-row align-center` }> 
        <i class="fa-solid fa-bars m-r-5"></i>
        <div className="flex-fill d-flex align-center">
            <img src={cookchef} alt="logo cookchef"></img>
            <h1>Cookchef</h1>
        </div>
        
        <ul>
            <button className="btn btn-reverse-primary m-r-5 "><span>Panier</span><i class="fa-solid fa-basket-shopping m-l-5"></i></button>
            <button className="btn btn-primary">connexion</button>
        </ul>
    </header>
    
    )
}

