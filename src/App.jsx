import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [num1, setNum1] = useState(0)
  let [num2, setNum2] = useState(0)
   let [res,setRes]=useState(0)
   let [theme,setTheme]=useState(["white","black"])
  return (
    <>
    <section style={{backgroundColor:`${theme[0]}`,color:`${theme[1]}`,display:"flex",justifyContent:"center",
        alignItems:"center",flexDirection:"column"}}>
    <div style={{display:"flex",justifyContent:"center",
        alignItems:"center"}}>
    <div>
    <h1>{num1}</h1>
    <div style={{display:"flex",justifyContent:"center",
        alignItems:"center",padding:"1rem"}}>
    <button onClick={(()=>setNum1(num1-1))}>-</button>
    <button onClick={()=>setNum1(num1+1)}>+</button>
    </div>
    </div>
    <div>
    <h1>{num2}</h1>
    <div style={{display:"flex",justifyContent:"center",
        alignItems:"center",padding:"1rem"}}>
    <button onClick={()=>setNum2(num2-1)}>-</button>
    <button onClick={()=>setNum2(num2+1)}>+</button>
    </div>
    </div>

    </div>
    <div style={{textAlign:"center"}}>
      <h1>{res}</h1>
      <div style={{display:"flex",justifyContent:"center",
        alignItems:"center",padding:"1rem"}}>
    <button onClick={()=>setRes(num1*num2)}>*</button>
    <button onClick={()=>setRes(num1+num2)}>+</button>
    <button onClick={()=>setRes(num1-num2)}>-</button>
    <button onClick={()=>setRes(num1%num2)}>%</button>
    </div>
    </div>
    <div className="themes">
    <button onClick={()=>setTheme(["white","black"])}>☀️</button><button onClick={()=>setTheme(["black","white"])}>🌑</button>
    </div>
    </section>
    </>
  )
}

export default App
