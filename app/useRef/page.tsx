'use client'
import React from 'react'

const page = () => {
    const inputRef = React.useRef<HTMLInputElement>(null)

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();

        const input = inputRef.current?.value
        console.log(input)
    }
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">name : </label>
        <input ref={inputRef} type="text" style={{border : '1px solid #e8e8e8'}} />
        <button type='submit'>submit</button>
    </form>
    </>
  )
}

export default page