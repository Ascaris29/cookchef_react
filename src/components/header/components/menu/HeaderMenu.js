import styles from '../menu/HeaderMenu.module.scss';

function HeaderMenu(){
    return (
        <ul className={`${styles.MenuContainer} card text-primary p-20`}>
            <li>WishList<i className="fa-solid fa-heart m-l-5"></i></li>
            <li>Connexion</li>
        </ul>
    )
}

export default HeaderMenu;