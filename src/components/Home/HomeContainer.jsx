// import React, { useEffect, useState } from 'react'
// import Home from './Home'


// const HomeContainer = () => {

  
//   // const [alquiler, setAlquiler] = useState(true)
//   // const [venta, setVenta] = useState(false)
//   const [operationSelect, setOperationSelect] = useState("alquiler")
//   const [propSelect, setPropSelect] = useState("casa")
//   const [amb, setAmb] = useState(1)
//   const [ubication, setUbication] = useState("")
//   const [currency, setCurrency] = useState("peso")
//   const [minPrice, setMinPrice] = useState("")
//   const [maxPrice, setMaxPrice] = useState("")
//   const [objData, setObjData] = useState({})




//     // const ventaTrue = ()=>{
//     //   setVenta(true)
//     //   alquiler ? setAlquiler(!alquiler) : ""
//     // }
    
//     // const alquilerTrue = ()=>{
//     //   setAlquiler(true)
//     //   venta ? setVenta(!venta) : ""
//     //   // console.log(alquiler)
//     // }

//     const handleOperationSelect = (e) =>{
//       setOperationSelect(e.target.value)
//     }

//     const handleUbication = (e)=>{
//         setUbication(e.target.value)
       
//         // console.log(ubication)
//     }

//     const handleAmb = (e)=>{
//       setAmb(e.target.value)
//     }

//     const handlePropSelect = (e) =>{
//       setPropSelect(e.target.value)
//       // console.log(propSelect)
//     }
      
//     const handleCurrency = (e)=>{
//       setCurrency(e.target.value)
//       // console.log(currency)
//     }
    
//     const handleMinPrice = (e)=>{
//       setMinPrice(e.target.value)
//       // console.log(minPrice)
//     }
    
//     const handleMaxPrice = (e)=>{
//       setMaxPrice(e.target.value)
//       // console.log(maxPrice)
//     }

  
    
//     const handleSubmit = (e)=>{
      
//       setObjData({
//         "operacion": operationSelect,
//         "propiedad": propSelect,
//         "ambientes": amb,
//         "ubicacion": ubication,
//         "moneda": currency,
//         "precioMin" : minPrice,
//         "precioMax" : maxPrice, 
//       })
      
      
      
      
//       e.preventDefault()
      
//     }
    
//     console.log(objData)
   

//   return (
//     <div><Home
//     //  alquilerTrue={alquilerTrue}
//     //  ventaTrue={ventaTrue}
//     //  venta={venta}
//     //  alquiler={alquiler}
//      handleOperationSelect={handleOperationSelect}
//      handleAmb={handleAmb}
//      handleUbication={handleUbication}
//      handleSubmit={handleSubmit}
//      handlePropSelect={handlePropSelect}
//      propSelect={propSelect}
//      handleCurrency={handleCurrency}
//      handleMaxPrice={handleMaxPrice}
//      handleMinPrice={handleMinPrice}
        
//         /></div>
//   )
// }

// export default HomeContainer