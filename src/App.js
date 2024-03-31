import React, { useEffect, useState } from 'react'
import Test from './components/test';

function App() {
  const [content , setContent] =useState('posts')
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([])
  useEffect(()=>{
    console.log('componentDidMount')
  }, [])

  useEffect(()=>{
    
    fetch('https://jsonplaceholder.typicode.com/'+ content)
      .then(response => response.json())
      .then(json => setItems(json))

    console.log('componentDidUpdate')
    return () =>{
      console.log('Unmount');
    }
  },[content])


  return (
    <>
    <div className='App'>
        <button onClick={()=>setCount(count+1)}>{count}</button>
        <button onClick={()=>setContent('posts')}>Posts</button>
        <button onClick={()=>setContent('users')}>Users</button>
        <button onClick={()=>setContent('comments')}>Comments</button>
        <h1>{content}</h1>
        <ul>
          {items && items.map(item=>{
            return <li key={item.id}>{item.id}</li>
            
          })}
        </ul>
    </div>
   
    </>
  )
}

export default App;