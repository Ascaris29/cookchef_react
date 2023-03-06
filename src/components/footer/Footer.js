import styles from "./Footer.module.scss";

export default function Footer(){
    return (
        <footer className={`${styles.footer} d-flex flex-row align-center justify-center p-20`}> Copyright © 2023 Cookchef ascaris Inc. </footer>
    );
}
