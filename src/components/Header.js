
//` 
import styles from "./Header.module.scss";
import cookchef from "../assets/images/cookchef.jpg"

export default function Header(){
    return (
    <header className={` ${styles.header} d-flex flex-row align-center` }> 
        <i class="fa-solid fa-bars m-r-5"></i>
        <div className="flex-fill">
            <img src={cookchef} alt="logo cookchef"></img>
        </div>
        <ul>
            <button className="m-r-5">panier</button>
            <button>connexion</button>
        </ul>
    </header>
    
    )
}

