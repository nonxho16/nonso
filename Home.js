import React from 'react'
import Header from '../component/Header/Header'
import { Button } from '../component/Button/Button';
const HomePage = () => {
  const name="Emma";
  const age=33;
  const presido="Buhari"

  let counter=1;

  return (
   <main>
       <h2>HomePage</h2>
       <Button text="SIGN UP" color="blue" size="sm" type="squared" /> 
       <Hello name ="patrick" age="24"/>
       <Hello name={name} age={age} />
       <Greetings name="godgifts" status ="Evening"/>
       <Greetings name ="ife" status="Afternoon" />
       <Greetings cute ={presido}/>
       <Countdown count={counter}/>
       <Countdown count={counter+=1}/>
   </main>
  )
}

export default HomePage

const Hello =(props)=>{
  return(
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}
//destructuring props
const Greetings =({name,status,cute})=>{
  return(
    <h3>Hello {name}, Good {status} to you. from {cute}</h3>
  )
}
const Countdown = ({count})=>{
  return(
    <h1>{count}</h1>
  )
}