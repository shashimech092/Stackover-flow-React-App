import React from 'react'
import logo from '../../assests/logo.jpg'
import { Link } from 'react-router-dom'
import search from '../../assests/search.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'


const Navbar = () => {
  var User=null

  return (
    <nav className='main-nav'>
    <div className='navbar'>
      <Link to='/' className='nav-item nav-logo'>
        <img src={logo} alt="logo" width='150' />
      </Link>
      <Link to='/' className='nav-item nav-btn'>About</Link>
      <Link to='/' className='nav-item nav-btn'>Products</Link>
      <Link to='/Team' className='nav-item nav-btn'>Chatbot</Link>
      <form>
        <input type="text" placeholder='Search..' />
        <img src={search} alt="search" width='18' className='search-icon'/>
      </form>
      { User===null ?
        <Link to="/Auth" className='nav-item nav-links'>Log in</Link>:
      <>
            <Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius='50%' color='white'><Link to='/User' style={{ color: "white", textDecoration: 'none' }}>S</Link></Avatar>
            <button className='nav-item nav-links'>Log out</button>
      </>
      }
      </div>
    </nav>
  )
}

export default Navbar


