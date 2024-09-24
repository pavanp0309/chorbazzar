import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import useAuth from '../hooks/useAuth'
import useCart from '../hooks/useCart'

const Navbar = () => {
    const[collpased,setCollpased]=useState(false)
    console.log(collpased)

     // function which makes false value To True value when button is cliked
     let showToggle=()=>{
      setCollpased(!collpased)
  }

    const {isLoggedIn,isloading,isUserlogged,signOut}=useAuth()
    console.log(isLoggedIn)

    // cart-icon value
    const {IconTotal}=useCart()

   const handleSignout=async()=>{
      let success= await signOut()
      if(success){
        console.log("done")
      }
   }

   if(isloading){
    return null
   }

  return (
  <>
  <nav className="navbar navbar-expand-sm bg-body-tertiary">
  <div className="container-fluid">
    <NavLink  className="navbar-brand text-success fs-3 fw-bold" >Chor<span style={{color:"orangered"}}>Bazzar</span></NavLink>
    <button className="navbar-toggler" type="button" onClick={showToggle} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${!!collpased && "show"}`} id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
        <li className="nav-item">
          <NavLink to={'/'} className="nav-link " aria-current="page" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/about'} >About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link " to={'/shop'} >Shop</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to={'/contact'} >Contact</NavLink>
        </li>
      </ul>
      {/* Logins start */}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
        {/* cart start */}
      <li className="nav-item px-1 ">
          <NavLink className=" btn btn-outline-success " to={'/cart'} >
          <i className="bi bi-bag"></i>
          {IconTotal!==0?IconTotal:null}
          </NavLink>
        </li>
         {/* cart end */}
       {isLoggedIn?(
          <li className="nav-item px-1 ">
          <button className=" btn btn-outline-success " onClick={()=>handleSignout()} >logout</button>
        </li>
       ):(
        <li className="nav-item px-1 ">
        <NavLink className=" btn btn-outline-success " to={'/loginin'} >SignIn</NavLink>
      </li>
       )}
    
      </ul>
      {/* Logins end */}
      
    </div>
  </div>
</nav>
  </>
  )
}

export default Navbar
