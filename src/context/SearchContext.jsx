import React, { createContext, useState } from 'react'


export const SearchContext = createContext()

const SearchContextProvider = ({children}) => {
  const [operationSelect, setOperationSelect] = useState("alquiler")
  const [propSelect, setPropSelect] = useState("casa")
  const [amb, setAmb] = useState(1)
  const [ubication, setUbication] = useState("")
  const [currency, setCurrency] = useState("peso")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [objData, setObjData] = useState({})

  const handleOperationSelect = (e) =>{
    setOperationSelect(e.target.value)
  }

  const handleUbication = (e)=>{
      setUbication(e.target.value)
     
      // console.log(ubication)
  }

  const handleAmb = (e)=>{
    setAmb(e.target.value)
  }

  const handlePropSelect = (e) =>{
    setPropSelect(e.target.value)
    // console.log(propSelect)
  }
    
  const handleCurrency = (e)=>{
    setCurrency(e.target.value)
    // console.log(currency)
  }
  
  const handleMinPrice = (e)=>{
    setMinPrice(e.target.value)
    // console.log(minPrice)
  }
  
  const handleMaxPrice = (e)=>{
    setMaxPrice(e.target.value)
    // console.log(maxPrice)
  }


  
  const handleSubmit = (e)=>{
     
    setObjData({
      "operacion": operationSelect,
      "propiedad": propSelect,
      "ambientes": amb,
      "ubicacion": ubication,
      "moneda": currency,
      "precioMin" : minPrice,
      "precioMax" : maxPrice, 
    })
   e.preventDefault()
  }
  // console.log(objData)
  
  let data={
    handleOperationSelect, handleAmb, handleCurrency, handleMaxPrice, handleMinPrice, handlePropSelect, handleSubmit, handleUbication, objData
  }
  return <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
}

export default SearchContextProvider