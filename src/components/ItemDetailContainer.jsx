import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
// import { getProductsById } from '../asyncMock';

export default function ItemDetailContainer({greetings}) {
    const [products, setProducts] = useState(null);
    
    const { id } = useParams()
    
    useEffect(()=>{
      const collectionProd = collection(db, 'products')
      const refAlDoc = doc(collectionProd, id)
      getDoc(refAlDoc)
      .then((res)=>setProducts({id:res.id,...res.data()}))
      .catch((error)=> console.log(error))
    },[id])

    console.log(id)

    // useEffect(() => {
    //   getProductsById(itemId)
    //     .then(response => {
    //       setProducts(response)
    //     })
    //     .catch(error => {
    //       console.error(error)
    //     })
    // }, [itemId])

    return(
        <div>
            <ItemDetail {...products} />
        </div>
    )

  }