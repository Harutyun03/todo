import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input.jsx/Input'
import Button from './components/Button.jsx/Button'
import Header from './components/Header.jsx/Header'


function App() {
  
  const [text,settext] = useState('')
  const [todo,settodo] = useState([])



  const setdata = (e) => {
      e.preventDefault()
  }



  const addtodos = () => {
    if(text.trim()){
      settodo((prev) => {
        return [
          ...prev,
          {
            id : Date.now(),
            title : text,
            isDone : false,
          }
        ]
      })

      settext('')
    }
 }

  const remove = (id) => {
      settodo(todo.filter((todo) => todo.id !== id ))
  }

  const change = (id) => {
      settodo(todo.map((todo) => {
        if(todo.id === id){
          return{
            ...todo,
            isDone : !todo.isDone
          }
        }
        else{
          return todo
        }
      }))
  }

  return (
    <>
    <section>
      <h1>To do list</h1>
        <form className='parent' onSubmit={setdata}>
            <Input value={text} changeValue={settext}/>
            <Button addtodos={addtodos}/>
        </form>
            <Header todo={todo}  remove={remove} change={change}/>
    </section>
    </>
  )
}

export default App
