import Productos from "./components/Productos"
import { productos } from "./data/db"
function App() {
  return (
    <>
      <header className="bg-fuchsia-600 py-4">
        <h1 className="text-center text-fuchsia-100 font-bold text-3xl">App de Consumo</h1>
      </header>
      <main className="max-w-5xl mx-auto py-4 grid md:grid-cols-2">
        <div>
          <h2 className="font-bold text-2xl">Productos</h2>
          <div>
            
            {
              //* funcion implicita que recibe un arreglo de objetos y los mapea
              productos.map(item=>(
                  <Productos key={item.id} item = {item}/>
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
