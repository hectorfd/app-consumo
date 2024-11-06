import { money } from "../helpers"
import { dbProdutos, OrdenItem } from "../types"

type ContenidoOrdenProps = {
    orden: OrdenItem[],
    removerItem: (id: dbProdutos["id"]) => void
    agregarItem: (item: dbProdutos) => void,
    restarItem: (item: dbProdutos) => void,
}


const ContenidoOrden = ({ orden, removerItem, agregarItem, restarItem }: ContenidoOrdenProps) => {
    return (
        <div>
            <h2 className="font-bold text-2xl text-cyan-900">Consumo</h2>
            <div className=" space-y-2 mt-5">
                {
                    orden.map(item => (
                        <div key={item.id}
                            className="flex justify-between items-center border-t border-gray-200 p-2 last-of-type:border-b"
                        >
                            <div className="felx">
                                <p>{item.nombre} - {money(item.precio)}</p>
                                <strong className="">Cantidad: {item.cantidad} - {money(item.precio * item.cantidad)}</strong>
                                <button 
                                    className=" text-pink-500 w-8 h-8 hover:text-red-500 items-center"
                                    onClick={()=>restarItem(item)}
                                >
                                    <span className="font-black text-3xl"> - </span>
                                </button>

                                <button 
                                    className=" text-sky-600 w-8 h-8 hover:text-blue-500 items-center"
                                    onClick={()=>agregarItem(item)}
                                >
                                    <span className="font-black text-3xl"> + </span>
                                </button>
                            </div>

                            <div>
                                

                                
                                
                                <button 
                                    className=" bg-orange-600 text-white rounded-full w-8 h-8 hover:bg-red-400 items-center"
                                    onClick={()=> removerItem(item.id)}
                                >
                                    <span className="font-bold text-lg">X</span>
                                </button>
                            </div>

                            

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default ContenidoOrden
