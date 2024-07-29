import React, { createContext, useState } from 'react'
import { useEffect } from 'react'
import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider'
import { db } from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
// import {data} from "../db"



export const SearchContext = createContext()

const SearchContextProvider = ({children}) => {
 
  
  const [objData, setObjData] = useState({})
  const [data, setData] = useState([])
  
  const handleChange = (e)=>{
    setObjData(objData=>{
      return {...objData, [e.target.name] : e.target.value}
    })
    
  }
  // Opción de fede
  // Por qué funciona esto?: 
  // con el for in hacemos que se pueda acceder a las keys, pero si queremos que se acceda a los valores de éstas, lo hacemos con los corchetes. Con el filter generamos una iteración por cada elemento del array de obj principal que tenemos como db y los relacionamos entre sí con el array de obj generado en result
  
  
  useEffect(()=>{
    const itemCollection = collection(db, "data")

    getDocs(itemCollection)
    .then(res =>{
      let fetch = res.docs.map(prop =>{
        return {
          ...prop.data(),
          id: prop.id
        }
      })
      setData(fetch)
    })
    
    .catch(err=> console.log(err))
  
  },[])
  let result = []
  result = data.filter(function(item) {
    for(let key in objData){
        if(item[key]=== undefined || item[key] != objData[key])
          return false}
        return true})
        
        console.log(objData)


    
    const handleSubmit= (e) => {
      e.preventDefault()
    }






  // const handleOperationSelect = (e) =>{
  //   setOperationSelect(e.target.value)
  // }

  // const handleUbication = (e)=>{
  //     setUbication(e.target.value)
     
  //     // console.log(ubication)
  // }

  // const handleAmb = (e)=>{
  //   setAmb(e.target.value)
  // }

  // const handlePropSelect = (e) =>{
  //   setPropSelect(e.target.value)
  //   // console.log(propSelect)
  // }
    
  // const handleCurrency = (e)=>{
  //   setCurrency(e.target.value)
  //   // console.log(currency)
  // }
  
  // const handleMinPrice = (e)=>{
  //   setMinPrice(e.target.value)
  //   // console.log(minPrice)
  // }
  
  // const handleMaxPrice = (e)=>{
  //   setMaxPrice(e.target.value)
  //   // console.log(maxPrice)
  // }


  
  // const handleSubmit = (e)=>{

    // e.target.map((f)=>{
    //   console.log(f)
    // }
    // )

    
    // console.log(nuevoArray)
    // console.log((e.target[0].name))
    // console.log((e.target[1].value))
    
  //   setObjData({
  //     operacion: operationSelect,
  //     propiedad: propSelect,  
  //     ambientes: amb,
  //     ubicacion: ubication,
  //     moneda: currency,
  //     precioMin : minPrice,
  //     precioMax : maxPrice, 
  //   })
  //   // console.log(objData )
  //   e.preventDefault()
  // }
  // console.log(Object.values(objData))
  // console.log(objData)
  
  // let data={
  //   handleOperationSelect, handleAmb, handleCurrency, handleMaxPrice, handleMinPrice, handlePropSelect, handleSubmit, handleUbication, objData
  // }

  let datos = {
    handleChange, handleSubmit, result
  }
  return <SearchContext.Provider value={datos}>{children}</SearchContext.Provider>
}

export default SearchContextProvider