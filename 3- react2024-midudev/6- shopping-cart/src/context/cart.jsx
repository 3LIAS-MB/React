import { createContext, useReducer } from "react";
import { cartReducer, cartInitialState } from "../reducer/cart";

// 1. Crear contexto
export const CartContext = createContext();

// El hook useReducer en React es una alternativa a useState para gestionar el estado en
// componentes funcionales. Se utiliza principalmente cuando tienes una lógica de estado
// compleja que involucra múltiples subvalores o cuando el siguiente estado depende del
// anterior. Es similar a la función reduce en JavaScript y se inspira en el patrón de
// manejo de estado de Redux.

// -> const [state, dispatch] = useReducer(reducer, initialState, init);

// 1. reducer: Una función que define cómo se debe actualizar el estado. Toma
// dos argumentos, el estado actual y una acción, y devuelve el nuevo estado.

/*const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};*/

// 2. initialState: El estado inicial del componente. Puede ser
// cualquier valor, como un objeto, número, cadena, etc.

/* const initialState = { count: 0 }; */

// 3. init (opcional): Una función que se puede utilizar para establecer el estado
// inicial perezosamente. Se invoca con initialState y devuelve el estado inicial.

/*const init = (initialCount) => {
  return { count: initialCount };
};*/

// 'state' es el estado actual del componente. Es un objeto que contiene todas las
// propiedades que el reductor gestiona. Cada vez que el reductor procesa una
// acción y devuelve un nuevo estado, state se actualiza con este valor.

// dispatch es una función que se utiliza para enviar acciones al reductor. Cuando se llama a dispatch
// con una acción, React ejecuta el reductor y actualiza el estado en función de la acción enviada.

// ¿Vale la pena quitar el estado y usar un useReducer para esto?
// Sí, porque ahora extrajimos la logica en una funcion totalmente separada.
// Incluso se podria usar incluso fuera de react. Ademas, es facil de testear.
// Con el useState el problema que el estado está dentro del componente, la logica
// de actualización está dentro y por lo tanto cuesta más. Es intesante usar
// 'useReducer' cuando se tiene muchos useState, es decir, estados fragmentados
function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  // Funciones de acción para el carrito de compras
  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });

  const clearCart = () => dispatch({ type: "CLEAN_CART" });

  return { state, addToCart, removeFromCart, clearCart };
}

export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
