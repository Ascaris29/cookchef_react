import { useEffect, useState } from "react";


export default function useFetchData(url, page) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState([]);

  useEffect(() => {
    let cancel = false;
    async function fetchData() {
      try {
        setIsLoading(true);
        //on crée une constante avec la fonction URLSearchParams qui s'occupe des paramètres d'url qui est vide pour l'instant
        const queryParam = new URLSearchParams();
        if (page) {
          //s'il y'a des pages differentes, on ajoute les limites de données et le skip à l'url du fetch (append = ajouter ) 
          queryParam.append('limit', 18);
          queryParam.append('skip', (page - 1) * 18);
        }
        const response = await fetch(url + `?${queryParam}`);
        if (response.ok && !cancel) {
          const newData = await response.json();
          setData((x) =>
            Array.isArray(newData) ? [...x, ...newData] : [...x, newData]
          );
        }
      } catch (e) {
        setError('Erreur');
      } finally {
        if (!cancel) {
          setIsLoading(false);
        }
      }
    }
    fetchData();
    return () => (cancel = true);
  }, [url, page]);

  return [[data, setData], isLoading, error];
}