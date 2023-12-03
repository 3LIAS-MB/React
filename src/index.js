/*React es una biblioteca para crear interfaces de usuario
 Las interfaces no solo esta en la web, tambien en estan en
 aplicaciones mobiles o de escritorio. En este caso es para web*/
import React from "react"; // bibloteca

/*Es como decirle 'Voy a estar trabajando con
react para navegador, para manipular el DOM'*/
import ReactDOM from "react-dom";
import { Greeting, Greeting2 } from "./Greeting";
import Product, {Navbar} from "./Product";

//const rootElement = document.getElementById('root')
//ReactDOM.createRoot(rootElement);

const root = ReactDOM.createRoot(document.getElementById("root")); // Desde 'ReactDOM' voy a estar utilizando el metodo 'createRoot()'

/*Para interpretar una funcion dentro de una porcion HTML hay que llamar a las llaves '{}'*/
/*En lugar de escribir la primera sintaxis, se puede utilizar como si fuera una etiqueta html'*/
// . A esta forma de escribir etiquetas se lo conoce como 'sekf closing tags
root.render(

    // Etiqueta especial 'Fragment <></>'
    // Siempre hay una etiqueta que contiene a alguien. Es un contenedor vacio
  <>
    {Greeting()}
    <Greeting />
    <Greeting2 />
  </>
);
