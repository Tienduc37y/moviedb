import { useEffect,useState } from 'react'
import './App.css'
import {fetchDataFromApi} from './utils/api'
function App() {
  const APITesting = () =>{
    fetchDataFromApi('/movie/popular')
    .then((res)=>{
        console.log(res)
    })
  }
  useEffect(()=>{
    APITesting()
  },[])
  return (
    <>
      App
    </>
  )
}

export default App
