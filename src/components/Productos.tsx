import { money } from "../helpers"
import type { dbProdutos } from "../types"

type ProdutosProps = {
    item: dbProdutos,
    index: number,
    agregarItem: (item: dbProdutos) => void,
}


const Productos = ({item, index, agregarItem}:ProdutosProps) => {
    //* desestructurando item 
    const {nombre, precio} = item
    return (
        <button 
            className="flex justify-between w-full p-2 bg-sky-50 hover:bg-sky-600 
                hover:text-white cursor-pointer 
                border-teal-800 border-2 
                rounded-lg px-4"
            onClick={()=>agregarItem(item)}
            >
            <div className="flex">
                <p className=" text-lg">{index}.</p>
                <h1 className="ml-2 text-lg">{nombre}</h1>
            </div>
            <strong>{money(precio)}</strong>
        </button>


    )
}

export default Productos
