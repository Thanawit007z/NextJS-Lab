'use client'
import React from 'react'

interface objectType {
  id : number ;
  name : string ;
}

const Page = () => {
  const [num , setNum] = React.useState<number>(0)
  const [data , setData] = React.useState<objectType[]>([
    {id : 1 , name : 'nay'},
    {id : 2 , name : 'faza'},
  ])
  const [input ,setInput] = React.useState<string>("")

  console.log(num)
  return (
    <>
    <div>{num}</div>
    <div style={{display : 'flex' , gap : 5}}>
      <button onClick={() => setNum(num+1)}>+</button>
      <button onClick={() => setNum(num-1)}>-</button>
      <button onClick={() => setNum(0)}>clear</button>
    </div>
    {JSON.stringify(data)} <br />
    map : {data.map(item => (<div key={item.id}>{item.name}</div>))}
    filter : {data.filter((item) => item.id == 1).map(item => (item.name))} <br />
    input : {input} <br />

<input 
    type="text" 
    style={{border : '1px solid #e8e8e8'}}
    value={input} 
    onChange={(e) => setInput(e.target.value)} 
  />
    </>

  )
}

export default Page