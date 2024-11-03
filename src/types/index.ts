export type dbProdutos ={
    id:number,
    nombre: string
    precio: number
}
//* vamos a extender el type de dbProducts con ordenItem para que sepamos cuantas veces se escoge el mismo producto
export type OrdenItem = dbProdutos &{
    cantidad: number
}