import React, { useContext, useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebaseConfig'

const ItemDetailContainer = () => {
//  const {result} = useContext(SearchContext)
 const {id} = useParams()
 const [product, setProduct] = useState({}) 

useEffect(()=>{
  const itemCollection = collection(db, "data")
  const refDoc = doc(itemCollection, id)
  getDoc(refDoc)
  .then((res)=>{
    setProduct({
      ...res.data(),
      id: res.id
    })
  })
  .catch((err)=> console.log(err))
},[id])

//  useEffect(()=>{
//    let encontrado = result.find((prod)=> prod.id === +id)
//    setProduct(encontrado)
//  },[id])
  return (
    <ItemDetail product={product}/>
    // <div>
    //   {data.map(dato=>{

    //     return( <ItemDetail dato={dato} key={dato.id}/>)
    //   })

    //   }
    //   </div>
  )
}

export default ItemDetailContainer