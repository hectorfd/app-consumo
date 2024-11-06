import { useState } from "react";
import type { dbProdutos, OrdenItem } from "../types";

export default function useOrden() {
    //* aplicamos aqui el tipo de dato de forma generica
    //* el useState inicia en un array vacio
    const [orden, setOrden] = useState<OrdenItem[]>([])

    //* para propinas
    const [prop, setProp] = useState(0)

    // funcion restar items
    const restarItem = (item:dbProdutos)=>{
        //* find es una metodo de array que encuentra el elemento segun la condicion
        const hayItem = orden.find(ordenItem =>  ordenItem.id === item.id)

        if(hayItem){
            const actualizarOrden = orden.map(ordenItem => {
                if (ordenItem.id === item.id) {
                    //* Si la cantidad es mayor que 1, restar 1, de lo contrario dejarla como está
                    const nuevaCantidad = ordenItem.cantidad > 1 ? ordenItem.cantidad - 1 : ordenItem.cantidad;
                    return {...ordenItem, cantidad: nuevaCantidad};
                } else {
                    return ordenItem;
                }
            })
            
            setOrden(actualizarOrden);
            
        }else{
            //* ahora si no hay item crea un nuevo usamos spread porque ya sabes los originales son inmutables 
            //* y no podemos cambiarlos directamente y a ese nuevo array le agregamos la propiedad cantidad y le damos valor de 1
            const nuevoItem = {...item, cantidad: 0}
            //* y setOrden aplica el nuevo item al estado consumo
            setOrden([...orden,nuevoItem])
        }
    }


    //Funcion Agregar Item
    const agregarItem = (item:dbProdutos)=>{
        //* find es una metodo de array que encuentra el elemento segun la condicion
        const hayItem = orden.find(ordenItem =>  ordenItem.id === item.id)

        if(hayItem){
            //* si ya existe el item, incrementamos la cantidad en 1 cada ves que se aplica la funcion
            const actualizarOrden = orden.map(ordenItem => ordenItem.id === item.id ?
                //* se traduce como crea una copia de ordenItem y agregale cantidad y a esa cantidad le agregamos 1 caso contrario solo muestrame el ordenItem
                {...ordenItem,cantidad : ordenItem.cantidad + 1 } : ordenItem)
                //* aqui aplicamos  el setOrden para actualizar el estado la funcion ya se encarga de verificar  si el estado cambio o no
                setOrden(actualizarOrden)
        }else{
            //* ahora si no hay item crea un nuevo usamos spread porque ya sabes los originales son inmutables 
            //* y no podemos cambiarlos directamente y a ese nuevo array le agregamos la propiedad cantidad y le damos valor de 1
            const nuevoItem = {...item, cantidad: 1}
            //* y setOrden aplica el nuevo item al estado consumo
            setOrden([...orden,nuevoItem])
        }
    }

    const removerItem = (id:dbProdutos['id'])=>{
        //* filter crea un nuevo array con todos los ítems que no tengan el id especificado
        const nuevaOrden = orden.filter(item => item.id !== id)
        //* setOrden aplica el nuevo array al estado
        setOrden(nuevaOrden)
    }

    //* para poder cambiar el estdo de cada elemento debemos tener una funcion que llame a los set de cada usestate

    const totalOrden = ()=> {
        setOrden([])
        setProp(0)
    }


    return{
        orden,  agregarItem, removerItem, prop, setProp, totalOrden, restarItem
    }
}
