import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link } from 'react-router-dom';

export default function DropDown({}) {
  return (
    <div>
        <NavDropdown title="Productos" id="navbarScrollingDropdown">
             
             <NavDropdown.Item ><NavLink to ={`/category/remera`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Remeras</NavLink></NavDropdown.Item> 
              <NavDropdown.Item> <NavLink to ={`/category/pantalon`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pantalones</NavLink></NavDropdown.Item>
              <NavDropdown.Item ><NavLink to ={`/category/zapatilla`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Zapatillas</NavLink></NavDropdown.Item>
              
            </NavDropdown>
    </div>
  )
}
