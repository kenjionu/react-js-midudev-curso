import { useEffect, useState } from "react"


const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({
    x: 0, y: 0
  })

  useEffect(()=> {
    console.log('effect', { enabled })
  
  
    const handleMove = (event)=>{
      const { clientX, clientY} = event
      console.log('handleMove', {clientX, clientY})
      setPosition({ x: clientX, y: clientY})
    }
  
    if(enabled) {
      //la suscripciones hay que limpiar
      //clean useEffect
      window.addEventListener('pointermove', handleMove)
    }
  
    //cleanup
    //cuando componente se desmonta
    return () => {
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    } //cuando se ejecuta esto?
  
  }, [enabled])
  
  return (

    <>
    <div>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        border: '1px solid #fff',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
    <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </div>
 
    </>
      )
}
function App() {
  const [mounted, setMounted] = useState(true)
  return (
      <>
      <main>
        { mounted && <FollowMouse /> }
        <button onClick={()=> setMounted(!mounted)}>
          toggle mounted FollowMouse component
        </button>
      </main>
   
      </>
        )
}

export default App
