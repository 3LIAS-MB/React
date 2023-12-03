function Product(){
    return <div>
        <h1>Producto</h1>
    </div>
}

export function Navbar() {
    return <nav>
        navigation
    </nav>
}

// Cuando se utiliza el export default hay que nombrarlo nosotros mismos, pero cuando internamente se este exportando con 'export', pueden llamar {Navbar} al nombre de la funcion que está siendo utilizada. Hay bibliotecas que exportan individualmente para no exportar todo y hay otras que exportan por defecto
export default Product

// import Product, {Navbar} from "./Product";
