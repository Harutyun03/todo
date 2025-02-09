import { useState } from 'react'
import './App.css'
import Input from './components/Input.jsx/Input'
import Button from './components/Button.jsx/Button'
import Header from './components/Header.jsx/Header'


function App() {
  
  const [text,settext] = useState('')
  const [todo,settodo] = useState([])
  const [edits, setEdit] = useState(false)
  const [titles, setTitles] = useState('')


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
            isediting : false
          }
        ]
      })
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



  let Edit = () => {
    setEdit(true)
}

let Exit = () => {
    if(titles.trim() === ''){
        alert('mi ban gri')
    }else{
        setEdit(false)
        if (titles.trim()) {
            return title
        }
    }
}

  return (
    <>
    <section>
      <h1>To do list</h1>
        <form className='parent' onSubmit={setdata}>
            <Input value={text} changeValue={settext}/>
            <Button addtodos={addtodos}/>
        </form>
            <Header todo={todo}  remove={remove} change={change} edit={Edit} exit={Exit} edits={edits}/>
    </section>
    </>
  )
}

export default App
