// useRef es un hook que te permite crear una referencia mutable que persiste
// durante todo el ciclo de vida de tu componente (entre rendes), es util para
// guardar cualquier valor que puedas mutar, como un identificador, un elemento
// del DOM, contador, etc y que cada vez que cambia no vuelve a renderizar el contentente
import { useState, useEffect, useRef } from "react";

export function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  // Casi siempre un useEffect es un 'custom hook'
  useEffect(() => {
    if (isFirstInput.current) {
      // cada vez que se intenta acceder a una referencia
      // siempre se accede al valor desde la propiedad 'current'
      isFirstInput.current = search === "";
      return;
    }

    if (search === " ") {
      setError("No se puede buscar una palabra vacia");
      return;
    }
    if (search.match(/^\d+$/)) { // regexs
      setError("No se puede buscar una pelicula con un número");
      return;
    }
    if (search.length < 3) {
      setError("La busqueda debe tener almenos 3 caracteres");
      return;
    }

    setError(null);
  }, [search]);

  return { search, setSearch, error };
}
