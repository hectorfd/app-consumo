import type { dbProdutos } from "../types"

type ProdutosProps = {
    item: dbProdutos,
}


const Productos = ({item}:ProdutosProps) => {
    
    return (
        <div>
            <h1>{item.id}</h1>
            <h1>{item.nombre}</h1>
            <h2>{item.precio}</h2>
        </div>
    )
}

export default Productos
