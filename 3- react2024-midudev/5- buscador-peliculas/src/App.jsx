import "./App.css";
import { useState, useCallback } from "react";
import { useMovies } from "./hooks/useMovies.js";
import { useSearch } from "./hooks/useSearch.js";
import { Movies } from "./components/Movies.jsx";
import debounce from "just-debounce-it";


function App() {
  const [sort, setSort] = useState(false);

  const { search, updateSearch, error } = useSearch();    
  const { movies, loading, getMovies } = useMovies({ search, sort });

  
  const debouncedGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 300),
    [getMovies]
  );

  // -> Forma no controlada
  // 1) Es decir, dependemos del DOM
  // 2) Midu recomienda esta porque suele ser más facil,
  // optimo, menos problemas y aprendes más JS
  const handleSubmit = (event) => {
    // const value = inputRef.current.value

    // const inputEl = inputRef.current
    // const value = inputEl.value

    // const fields = new window.FormData(event.target)
    // const query = fields.get('query')

    // -> Para varios inputs
    // const fields = Object.fromEntries(new window.FormData(event.target))
    // console.log(fields)
    event.preventDefault();
    getMovies({ search });
  };

  const handleSort = () => {
    setSort(!sort);
  };
  // -> Forma controlada
  // 1) Hay más posibilidades para validar un formulario
  // 2) Codigo más recogido
  // 3) No depender del DOM
  const handleChange = (event) => {
    const newSearch = event.target.value;
    // El estado es asincrono por lo 
    // updateSearch(event.target.value)
    updateSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  // useEffect(() => {
  //   console.log("new getMovies received");
  // }, [getMovies]);

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
