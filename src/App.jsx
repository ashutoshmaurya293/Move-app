import './App.css'
import { useEffect } from 'react'
import { fetchApi } from './utils/Api'
function App() {
  useEffect(()=>{
api()
  },[])
  const api = ()=>{
    fetchApi("/movie/popular")
    .then((res)=>{
      console.log(res);
    })
  }

  return (
    <>
      <h1>App</h1>
    </>
  )
}

export default App
