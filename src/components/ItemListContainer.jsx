import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../services/firebase';
// import { getProducts, getProductsByCategory } from '../asyncMock';

export default function ItemListContainer({greetings}) {

  const [products, setProducts] = useState([]);

  const {categoryId} = useParams()
  
  useEffect(() => {
      const coleccion = categoryId ? query(collection(db, "products"), where("category", "==", categoryId)) : collection(db, "products")
      getDocs(coleccion)
      .then((res)=> {
        const list = res.docs.map((product)=>{
          return {
            id:product.id,
            ...product.data()
          }
        })
        
        setProducts(list)
      })
      .catch((error) => console.log(error))
      
  },[categoryId])


  // useEffect(() => {
  //   const asyncFunc = categoryId ? getProductsByCategory : getProducts
    
  //   asyncFunc(categoryId)
  //     .then(response => {
  //       setProducts(response)
  //     })
  //     .catch(error => {
  //       console.error(error)
  //     })
  // }, [categoryId])


  return (
    <div>
        <h1>{greetings}</h1>
        <ItemList products={products}/>
    </div>
  )
}
