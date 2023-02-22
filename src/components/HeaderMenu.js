import styles from '../components/HeaderMenu.module.scss';

function HeaderMenu(){
    return (
        <ul className={`${styles.MenuContainer} card text-primary p-20`}>
            <li>WishList<i class="fa-solid fa-heart m-l-5"></i></li>
            <li>Connexion</li>
        </ul>
    )
}

export default HeaderMenu;