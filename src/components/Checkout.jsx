import { addDoc, collection, serverTimestamp} from 'firebase/firestore'
import React, { useState , useContext} from 'react'
import { db } from '../services/firebase'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'




const Checkout = () => {
    const [user, setUser] =useState({})
    const [validateEmail, setValidateEmail]= useState('')
    const [orderId, setOrderId] = useState('')
    const {cart, total, clearCart} = useContext(CartContext)

    const datosComprador = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const finalizarCompra = (e) => {
        e.preventDefault()
        if(!user.name && !user.phone) {
            alert('Completa los campos')
        } else {
            let order = {
                user,
                item:cart,
                total:total(),
                date:serverTimestamp()
            }
            console.log(order)
            const ventas = collection(db, "orders")
            addDoc(ventas,order)
            .then((res)=> {
                setOrderId(res.id)
                clearCart()
            })
            .catch((error)=> console.log(error))
        }
       
    }

    return (
        <div>
      {orderId !== '' 
      ? <div>
            <h2>Perfecto! tu orden fue generada con exito</h2>
            <h5>Su id de compra es: {orderId}</h5>
            <Link  to='/'><button className='btn btn-dark'>Seguir comprando</button></Link>
      </div> 
      :  <div>
      <h2>Terminar compra</h2>
      <h5>Por Favor completar los datos</h5>
      <form onSubmit={finalizarCompra}>
          <div className='mb-3'>
              <label className='form-label'>Nombre Completo</label>
              <input type="text" className='form-control' placeholder='Nombre y apellido' name='name' onChange={datosComprador} required/>
          </div>
          <div className='mb-3'>
              <label className='form-label'>Numero de telefono</label>
              <input type="number" className='form-control' placeholder='+54 12345678' name='phone' onChange={datosComprador} />
          </div>
          <div className='mb-3'>
              <label className='form-label'>Direccion de email</label>
              <input type="email" className='form-control' placeholder='maroch@gmail.com' name='mail' onChange={datosComprador}/>
          </div>
          <div className='mb-3'>
              <label className='form-label'>Repetir E-mail</label>
              <input type="email" className='form-control' placeholder='maroch@gmail.com' name='mail' onChange={((e) => setValidateEmail(e.target.value))}/>
          </div>
          <button className='btn btn-dark' type='submit' disabled={validateEmail !== user.mail} >Generar orden</button>
      </form>
 </div> }
      </div>
    )
    
}

export default Checkout