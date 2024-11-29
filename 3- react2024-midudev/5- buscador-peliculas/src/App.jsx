import "./App.css";
import { useState, useCallback } from "react";
import { useMovies } from "./hooks/useMovies.js";
import { useSearch } from "./hooks/useSearch.js";
import { Movies } from "./components/Movies.jsx";
import debounce from "just-debounce-it";

function App() {
  const [sort, setSort] = useState(false);

  const { search, setSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const debouncedGetMovies = useCallback(
    // Toma dos parámetros: La función a ejecutar
    // y el tiempo de espera en milisegundos
    debounce((search) => {
      getMovies({ search });
    }, 300),
    [getMovies]
  );

  // Forma no controlada
  // 1) Depende directamente del DOM para obtener valores de los campos.
  // 2) Suele ser más sencilla de implementar y presenta menos problemas en algunos casos.
  // 3) Permite practicar más con el uso de JavaScript puro.
  const handleSubmit = (event) => {
  // const value = inputRef.current.value

  // const fields = new window.FormData(event.target)
  // const query = fields.get('query')

  // -> Para varios inputs
  // const fields = Object.fromEntries(new window.FormData(event.target))

    event.preventDefault();
    getMovies({ search });
  };

  const handleSort = () => {
    setSort(!sort);
  };
  // -> Forma controlada:
  // 1) Permite validar y gestionar mejor los datos del formulario mediante el estado.
  // 2) El código es más organizado y fácil de seguir.
  // 3) No depende directamente del DOM, lo que facilita su integración con React.
  const handleChange = (event) => {
    const newSearch = event.target.value;
    // El estado es asincrono por lo
    // updateSearch(event.target.value)
    setSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            onChange={handleChange}
            value={search}
            name="query"
            placeholder="Avengers, Star Wars, The Matrix..."
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
