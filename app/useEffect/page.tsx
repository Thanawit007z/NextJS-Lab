'use client'
import React from 'react'

const page = () => {
    const [state , setState] = React.useState<boolean>(false)

    React.useEffect(() => {
        const query = async () => {
            const res = await fetch('https://dragonball-api.com/api/characters?page=2&limit=5')
            const data = await res.json()
            console.log(data)
        }

        query()
    },[])

        React.useEffect(() => {
        const query = async () => {
            const res = await fetch('https://dragonball-api.com/api/characters?page=2&limit=5')
            const data = await res.json()
            console.log('trigger : ' ,data)
        }

        query()
    },[state])

  return (
    <>
    <button onClick={() => setState(prev => !prev)}>click</button>
    </>
  )
}

export default page