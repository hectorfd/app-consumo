import type { dbProdutos } from "../types"

type ProdutosProps = {
    item: dbProdutos,
    index: number
}


const Productos = ({item, index}:ProdutosProps) => {
    //* desestructurando item 
    const {nombre, precio} = item
    return (
        <button 
            className="flex justify-between w-full p-2 bg-sky-50 hover:bg-sky-600 
                hover:text-white cursor-pointer 
                border-teal-800 border-2 
                rounded-lg px-4"
            
            >
            <div className="flex">
                <p className=" text-lg">{index}.</p>
                <h1 className="ml-2 text-lg">{nombre}</h1>
            </div>
            <strong>{precio}</strong>
        </button>


    )
}

export default Productos
