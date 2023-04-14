import { createStaticHandler } from '@remix-run/router'
import { CachedInputFileSystem } from 'enhanced-resolve'
import React from 'react'
import { useState } from 'react'
import Card from '../component/Card'
import { cardData } from '../data'
//import { Button } from '../component/Button/Button'

const AboutPage = () => {
  return (
   <main>
       <h2>AboutPage</h2>
       <PreviewComp/>
       <section>
         <Card location="New Heaven" desc="gytbdxnximi uhuxlnxep jn9s9jipnj vax kn.iswnwb jw8hxwenx89x90 n8whxiwnxioz" name="wealth" position="CEO of Anime Studio"/>
         <Card location="Free Town" desc="gytbdxnximi uhuxlnxep jn9s9jipnj vax kn.iswnwb jw8hxwenx89x90 n8whxiwnxioz" name="Chris" position="CEO of Chrisville"/>
         <Card location="Long Bridge" desc="gytbdxnximi uhuxlnxep jn9s9jipnj vax kn.iswnwb jw8hxwenx89x90 n8whxiwnxioz" name="Godsgift" position="CEO of Google"/>
         <Card location="Soweto" desc="gytbdxnximi uhuxlnxep jn9s9jipnj vax kn.iswnwb jw8hxwenx89x90 n8whxiwnxioz" name="Ikechukwu" position="CEO of Ike-Bros and Sons"/>
       </section>
       <section>
         {cardData.map((card)=>{
           return (
             <Card img_path={card.img_path} location={card.location} desc={card.desc} name={card.name} position={card.position} />
           )
         })}
       </section>
   </main>
  )
}

export default AboutPage


const PreviewComp = () => {
// const [initialState, setState] = useState(0);
const [count, setCount] = useState(0);
const [name, setName] = useState("patrick");
// setTimeout(
//   ()=> setState(initialState + 1), 1000
// setTimeout(
//   function(){setCount(count+2)},500)

//    const handleClick = () => {
//       setCount( count+1)
//  }
 
  const addCount = ()=>{
    setCount( count + 1)
  }
  const subtractCount = ()=>{
    setCount( count - 1)
  }
  const resetCount = ()=>{
    setCount(0)
  }
  const addName = ()=> {
    setName("wealth")
  }

return(
  <>
  <h1>{name}</h1>
  <Button text="Likee" handleClick={addName}/>
   {/* <h1>{initialState}</h1>  */}
  <Display count ={count} /> 
  {/* <h1>{count}</h1> */}
  <Button text="PLUS" handleClick={addCount}/>
  <Button text="MINUS" handleClick={subtractCount}/>
  <Button text="RESET" handleClick={resetCount}/>
   {/* <button onClick={HandleClick}>PLUS</button>
  <button onClick={setCount(count-1)}>MINUS</button>  */}
  </>
)
}
const Display =(props) =>{
  return(
    <div>
      <h1>{props.count}</h1>
    </div>
  )
}

const Button =(props)=>{
  return(
    <button onClick={props.handleClick}> {props.text}</button>
  )
}