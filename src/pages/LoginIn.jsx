import {useState } from 'react'
import useAuth from '../hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'

const LoginIn = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  // using the CreateUser functionality from store
   const {userLogin}=useAuth()
   const navigate=useNavigate()

  //  handling the form submission
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
       let success=await userLogin({email,password})
       if(success){
        navigate("/")
       }
      
    } catch (error) {
       toast.error("failed to login")
    }
  }


  return (
    <div className="container p-5 ">
      <div className="row border border-primary p-3 shadow">

        {/* col-1 start */}
        <div className="col-sm-12 col-12 col-md-6 col-lg-6 ">
          <img src="/src/assets/register.png" alt="" className='img-fluid img-thumbnail' />
        </div>
        {/* col-1 end */}
        <div className="col-sm-12 col-12 col-md-6 col-lg-6 ">
          {/* form content */}
          <form className='row' onSubmit={handleSubmit}>
            <h3 className='fw-bold fs-4 text-success'>Login</h3>
            <p className='mb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, qui quia dolores adipisci quo debitis dolorem, alias ad molestiae modi voluptatum in doloribus? Ipsa, similique! Doloribus, aut? Excepturi, libero provident.</p>
            <div class="mb-5">
              <label for="email" class="form-label fw-bold fs-4">Email</label>
              <input 
              type="email" 
              class="form-control" 
              id="email" 
              placeholder="Enter ur email"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}

               />
            </div>
            <div class="mb-5">
              <label for="password" class="form-label fw-bold fs-4">Password</label>
              <input 
              type="password" 
              class="form-control" 
              id="password" 
              placeholder="Enter ur password"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}

               />            
            </div>

            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-primary" type="submit">SignIn</button>
              <Link className="nav-link btn btn-outline-success text-dark p-2" to={'/register'}  >Register</Link>
          </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default LoginIn
