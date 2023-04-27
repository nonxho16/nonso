import React from 'react'
import "./Signup.css"

const Signup = () => {
  return (
    <>
      <form action="" id="form box" method="get">
        <h3> Sign Up</h3>
        <input type="text" name="" className="press-log-3" required placeholder=" First Name" />
        <input type="text" name="" className="press-log-3" required placeholder=" Last Name" />
        <input type="email" name="" id="" required placeholder=" Email" />
        <input type="password" name="" id="" required placeholder=" Password" />
        <input type="text" name="" id="" required placeholder=" Phone Number" />
        <input type="datetime-local" name="" id="" />
        
        <div className='foo'>
        <label for="services">will you be requiring any of the following</label> <br></br>
        <input type="radio" name="services" id="" class="input-radio"/>chaperone<br></br>
        <input type="radio" name="services" id="" class="input-radio"/>special seating<br></br>
        <input type="radio" name="services" id="" class="input-radio"/>special diet<br></br>
        <input type="radio" name="services" id="" class="input-radio"/>handicapped accomodation<br></br>
        <input type="radio" name="services" id="" class="input-radio"/>others<br></br>
        </div>
       
        <label for="">Questions/Comments</label> 
        <input type="text" name="" id="" className='fox' />

        <div className='now'>
          <input type="checkbox" name="" id="" className="press-log" /><div>you agree to our terms and privacy policy</div>
        </div>

        <button>
          Send
        </button>
      </form>

    </>
  )
}

export default Signup