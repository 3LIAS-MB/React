// import { useCart } from "../hooks/useCart";
import { useFilters } from "../hooks/useFilters";
import "./Footer.css";

export function Footer() {
  const { filters } = useFilters()
  // const { cart } = useCart;

  return (
    <footer className="footer">
      {/* Primer parámetro (filters): Es el objeto que se quiere convertir a JSON.
      Segundo parámetro (null): Es una función de reemplazo, que en este caso no se utiliza. Al pasar null, no se modifica el objeto durante la conversión.
      Tercer parámetro (2): Especifica el nivel de indentación para hacer el JSON más legible. En este caso, las estructuras anidadas del objeto se indentarán con 2 espacios. */}

      {JSON.stringify(filters, null, 2)}

      {/* {JSON.stringify(cart, null, 2)} */}

      {/* <h4>Prueba técnica de React ⚛️ － <span>@midudev</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5> */}
    </footer>
  );
}
