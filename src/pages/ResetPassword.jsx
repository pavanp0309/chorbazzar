import {useState} from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ResetPassword = () => {
//   state to hold the Email given by user 
const [email,setEmail]=useState('')

const {resetPassword}=useAuth()
const navigate=useNavigate()

const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
       await resetPassword(email)
        navigate('/loginin')
       }catch (error) {
       toast.error("email is not verified")
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
          <h3 className='fw-bold fs-4 text-success'>RESETPASSWORD</h3>
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
          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-primary" type="submit">sendEmail</button>
        </div>
        </form>

      </div>
    </div>
  </div>
  )
}

export default ResetPassword
