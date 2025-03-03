import { useId } from "react";
import "./Filters.css";
import { useFilters } from "../hooks/useFilters";

// import { useContext } from "react";
// import { FiltersContext } from "../context/filters";

export function Filters() {
  // const { filters, setFilters } = useContext(FiltersContext)

  // trae los productos filtrados
  const { filters, setFilters } = useFilters();

  // No debe usarse como 'key' en una lista iterada.
  // Esto se debe a que 'useId' genera un ID único para cada renderizado
  // del componente, lo que puede causar problemas si el orden de los elementos
  // cambia dinámicamente o si los componentes se vuelven a montar.

  // Los IDs generados por 'useId' son únicos dentro del contexto del componente
  // y no están pensados para identificar datos o elementos en una lista iterada.
  // En cambio, sirven para asociar etiquetas HTML con controles de formulario
  // (por ejemplo, 'label' y 'input') de manera accesible y confiable.

  // Es perfecto para este tipo de uso: generar IDs únicos para controles individuales.
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de: </label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptos">Portatiles</option>
          <option value="smarthphone">Celulares</option>
        </select>
      </div>
    </section>
  );
}
