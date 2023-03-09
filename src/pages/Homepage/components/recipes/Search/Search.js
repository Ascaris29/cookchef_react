import  styles from './Search.module.scss';


export default function Search({setFilter}){
    function handleInput(e){
        const filter = e.target.value;
        setFilter(filter.trim().toLowerCase());
    }
    return (
        <div className={`d-flex flex-row justify-center align-center m-b-20 m-t-20 ${styles.searchBar}`}>
            <i className="fa-solid fa-magnifying-glass m-r-10"></i>
            <input 
            onInput={handleInput} 
            className="flex-fill" 
            type="text" 
            placeholder="Rechercher" />
        </div>
    )
}