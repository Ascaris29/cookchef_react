
import styles from "../loading/Loading.module.scss"

export default function Loading(){
    return <div className="d-flex flex-row align-center justify-center flex-fill">
        <i className={`fa-solid fa-spinner ${ styles.spinner}`}></i>
    </div>
}