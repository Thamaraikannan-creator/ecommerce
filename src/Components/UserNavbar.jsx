import '../Styles/AdminNavbar.css'
import React from 'react'
import { Link } from 'react-router-dom'
import AccountDropdown from './AccountDropdown'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/UserNavbar.css'

export default function AdminNavbar() {
  return (
    <div className='userNavbar'>
        <div className="logo">
            <h1>E<span>kart</span></h1>
        </div>
        <div className="links">
          <Link to='/userHomepage/viewproducts'><AddShoppingCartIcon/>ShoppingList</Link>
          <Link to='/userHomepage/viewcart'> <ShoppingCartIcon/> Cart </Link>
        </div>
        <div className="account">
        <AccountDropdown/>
      

        </div>
       
    </div>
  )
}
