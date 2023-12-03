// Creando un componente. Puede devolver porciones de interfaz (codigo HTML)
export function Greeting() {
    const married = false;
  
    /* NO se suele usar este formato
      if(married) {
          return <h1>Estoy casado</h1>
      } else {
          return <h1>No estiy casado</h1>
      }*/
  
    return <h1>{married ? "estoy casado" : "no estoy"}</h1>;
  }
  //root.render(Greeting()) // -> Esta funcion espera elementos hijos, es decir, mi aplicacion, elementos HTML
  
  // Los objetos no son validos como un elemento hijo de react. Solo string, boleeanos y etiquetas
  export function Greeting2() {
    const user = {
      firstName: "ryan",
      lastName: "Ray",
      value: true,
    };
  
    function add(x, y) {
      return x +y
  }
    // Convierte un objeto de js en su version String
    //return <h1>{JSON.stringify(user)}</h1>
  
    return (
      <div>
        <h1>{user.firstName}</h1>
        <h3>{user.lastName}</h3>
        <p>{user.value.toString()}</p>
        <h1>{add(10,30)}</h1>
      </div>
    );
  }

  // export default Greeting -> Exporta TODOS los modulos
  /**/


