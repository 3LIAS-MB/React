import { useEffect, useState } from "react";

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // [] → solo se ejecuta una vez cuando se monta el componente
  // [enabled] → se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined → se ejecuta cada vez que se renderiza el componente

  // pointer move
  useEffect(() => {
    // event -> devuelve un objeto PointerEvent {}
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      // 'pointermove' es un tipo de evento que se utiliza para detectar movimientos
      // del puntero (como el mouse, el lápiz o el dedo en dispositivos táctiles)
      // en la ventana del navegador. Este evento se dispara continuamente
      // mientras el puntero se mueve sobre un elemento.
      window.addEventListener("pointermove", handleMove);
    }

    // Montar componente -> cuando se renderiza por primera vez
    // 1) Se ejecuta siempre que se desmonte el componente,
    // 2) Se ejecuta tambien cuando cambia la dependencia
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  // -> 'document' no existe en el servidor -> se lo usa en un efecto
  
  // El método toggle se usa para alternar el estado de algo.
  // En este contexto, se utiliza para agregar o 
  // quitar una clase CSS de un elemento del DOM,
  // dependiendo de si la clase ya está presente o no.
  useEffect(() => {
    document.body.classList.toggle("no-cursor", enabled);
    return () => {
      document.body.classList.remove("no-cursor", false);
    };
  });

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          // La propiedad CSS pointerEvents: "none" hace que un elemento no responda a eventos
          // de puntero (como clics, desplazamientos o cualquier otra interacción del mouse o
          // el toque). En otras palabras, el elemento se vuelve "invisible" a los eventos
          // del mouse o del toque, y estos eventos pasarán a los elementos subyacentes.
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} puntero
      </button>
    </>
  );
};

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  );
}

export default App;
