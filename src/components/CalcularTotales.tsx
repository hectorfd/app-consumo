import { useMemo } from "react"
import { OrdenItem } from "../types"
import { money } from "../helpers"

type CalcularTotalesProps = {
    orden: OrdenItem[],
    prop:  number,
    totalOrden: () => void,

}

const CalcularTotales = ({orden,  prop, totalOrden}:CalcularTotalesProps) => {
    const montoSubTotal = useMemo(() => orden.reduce((total, item)=> total + (item.cantidad * item.precio),0), [orden])
    const montoPropina = useMemo(() => montoSubTotal * prop, [prop, montoSubTotal])
    const montoTotal = useMemo(() => montoSubTotal + montoPropina, [montoSubTotal, montoPropina])
    return (

        <div>
            <h2 className="font-bold text-2xl text-cyan-900 mb-5">Totales</h2>
            <p>Subtotal: <strong>{money(montoSubTotal)}</strong></p>
            <p>Propina: <strong>{money(montoPropina)}</strong></p>
            <p>Total a Pagar: <strong>{money(montoTotal)}</strong></p>

            <button
            className=" w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg mt-5"
            disabled={montoSubTotal === 0}
            onClick={totalOrden}
            >
            Guardar orden
            </button>
        </div>
    )
}

export default CalcularTotales
