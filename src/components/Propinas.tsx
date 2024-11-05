import '../index.css'
const porcentajes = [
    {
        id: 'p-5',
        value: .05,
        label: '5%',
    },
    {
        id: 'p-10',
        value: .10,
        label: '10%',
    },
    {
        id: 'p-25',
        value: .25,
        label: '25%',
    },
]
type PropinasProp = {
    prop: number,
    setProp: React.Dispatch<React.SetStateAction<number>>
    
}

const Propinas = ({prop, setProp}: PropinasProp) => {
    return (
        <div>
            <h3 className=" font-bold text-2xl text-cyan-900  mb-4">Propina</h3>
            <form action="" className="grid grid-cols-3 p-0">
                {
                    porcentajes.map(porcentaje=>(
                        <div key={porcentaje.id} className="flex justify-center p-0">
                            <input
                                id = {porcentaje.id} 
                                type = "radio"
                                name = "prop"
                                value = {porcentaje.value}
                                title = "propinas"
                                className = "m-1 radio w-6 h-6 border-2 border-gray-400 rounded-full appearance-none cursor-pointer checked:border-sky-400 focus:outline-none"
                                checked = {prop === porcentaje.value}
                                onChange = {e => setProp(+e.target.value)}
                            />
                            <label htmlFor={porcentaje.id} className=' text-lg font-bold cursor-pointer'>
                            {porcentaje.label}
                            </label>
                            
                        </div>
                        

                    ))
                }
            </form>

        </div>
    )
}

export default Propinas
