import { money } from "../helpers"
import { dbProdutos, OrdenItem } from "../types"

type ContenidoOrdenProps = {
    orden: OrdenItem[],
    removerItem: (id: dbProdutos["id"]) => void
}


const ContenidoOrden = ({ orden, removerItem }: ContenidoOrdenProps) => {
    return (
        <div>
            <h2 className="font-bold text-2xl">Consumo</h2>
            <div className=" space-y-2 mt-5">
                {
                    orden.map(item => (
                        <div key={item.id}
                            className="flex justify-between items-center border-t border-gray-200 p-2 last-of-type:border-b"
                        >
                            <div className="felx">
                                <p>{item.nombre} - {money(item.precio)}</p>
                                <strong className="">Cantidad: {item.cantidad} - {money(item.precio * item.cantidad)}</strong>
                            </div>
                            
                            <button 
                                className=" bg-red-500 text-white rounded-full w-8 h-8 hover:bg-red-600 items-center"
                                onClick={()=> removerItem(item.id)}
                            >
                                X
                            </button>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default ContenidoOrden
