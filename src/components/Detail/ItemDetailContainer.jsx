import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import {data} from'../../db'

const ItemDetailContainer = () => {

 

  return (
    <ItemDetail/>
    // <div>
    //   {data.map(dato=>{

    //     return( <ItemDetail dato={dato} key={dato.id}/>)
    //   })

    //   }
    //   </div>
  )
}

export default ItemDetailContainer