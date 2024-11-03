import Productos from "./components/Productos"
import { productos } from "./data/db"
function App() {
  return (
    <>
      <header className=" bg-sky-700 py-4">
        <h1 className="text-center text-white font-bold text-3xl">Tia Veneno</h1>
      </header>
      <main className="max-w-5xl mx-auto py-4 grid md:grid-cols-2">
        <div>
          <h2 className="font-bold text-2xl">Productos</h2>
          <div className=" space-y-2 mt-5">
            
            {
              //* funcion implicita que recibe un arreglo de objetos y los mapea
              productos.map((item,index)=>(
                  <Productos key={item.id} item = {item} index = {index + 1}/>
              ))
            }
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl">Consumo</h2>
        </div>

      </main>

    </>
  )
}

export default App
