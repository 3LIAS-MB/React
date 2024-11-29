// useCallback: Memoriza una función para que no se vuelva a crear en cada renderizado.
// useMemo: Memoriza el resultado de una computación.

// Usamos 'useCallback' para memorizar funciones y 'useMemo' para valores calculados.
// - 'useCallback' es útil para funciones que se pasan como dependencia o prop.
// - 'useMemo' es ideal para memorizar datos derivados o cálculos costosos.

// Ejemplo de useCallback:
// const memoizedFunction = useCallback(() => doSomething(), [dependency]);

// Ejemplo de useMemo:
// const memoizedValue = useMemo(() => expensiveComputation(), [dependency]);

import { useState, useRef, useMemo, useCallback } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // El error puedo implementarlo después
  const [, setError] = useState(null);
  const previousSearch = useRef(search);

  // 'useCallback()' es un hook diseñado para memorizar funciones, evitando que se recreen en cada renderizado.
  // Aunque internamente se asemeja a 'useMemo()', está optimizado para funciones.
  // Es útil cuando una función se pasa como dependencia o prop para prevenir renderizados innecesarios.
  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return;
    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (e) {
      setError(e.message);
    } finally {
      // entra de todas formas,
      // haya o no un error
      setLoading(false);
    }
  }, []);

  // -> 'useMemo()' memoriza el resultado de una computación para evitar recalcularlo en cada renderizado.
  // Se ejecuta solo si las dependencias especificadas cambian.
  // Es ideal para cálculos costosos o listas derivadas.
  // useMemo toma una función (que devuelve el valor a memorizar) y un array de dependencias.

  // -> localeCompare()
  // Se utiliza para comparar dos cadenas de texto de acuerdo con las reglas
  // de ordenamiento específicas del idioma y configuración regional
  // Este método devuelve un número que indica si una cadena de texto viene
  // antes, después o es igual a otra cadena de texto en el orden de clasificación.

  // 1) locales (opcional): Una cadena o matriz de cadenas con etiquetas
  // de idioma para configurar el idioma que se usará en la comparación.
  // 2) options (opcional): Un objeto con propiedades que configuran las
  // reglas de comparación (como sensitivity, ignorePunctuation, etc.).
  
  // -> string1.localeCompare(string2, locales, options)
  const sortedMovies = useMemo(() => {
    return sort
      ? // operador ternario ' : ? '
        [...movies].sort((a, b) => // 0 (considera 'a' y 'e' como equivalentes)
          a.year.localeCompare(b.year, "en", { sensivility: "base" })
        )
      : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies, loading };
}
