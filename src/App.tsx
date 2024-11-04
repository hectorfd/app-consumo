import ContenidoOrden from "./components/ContenidoOrden"
import Productos from "./components/Productos"
import { productos } from "./data/db"
import useOrden from "./hooks/useOrden"
function App() {

  //* aqui vamos a desestructurar el useOrden
  const {orden, agregarItem, removerItem } = useOrden()
  return (
    <>
      <header className=" bg-sky-700 py-4">
        <h1 className="text-center text-white font-bold text-3xl">Tia Veneno</h1>
      </header>
      <main className="max-w-5xl mx-auto py-4 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="font-bold text-2xl">Productos</h2>
          <div className=" space-y-2 mt-5">
            {
              //* funcion implicita que recibe un arreglo de objetos y los mapea
              productos.map((item,index)=>(
                  <Productos key={item.id} item = {item} index = {index + 1} agregarItem={agregarItem}/>
              ))
            }
          </div>
        </div>
        <div className=" border border-dashed border-sky-300 p-5 rounded-lg space-y-10">
          <ContenidoOrden orden={orden} removerItem={removerItem}/>

        </div>

      </main>

    </>
  )
}

export default App
