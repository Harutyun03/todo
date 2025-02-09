import './Header.css'


function Header (props){
    return(
            <div className='box'>
                {
                    props.todo.map((todo) => {
                        return (
                            <li key={todo.id}>
                                <input type={'checkbox'} checked={todo.isDone} onChange={() => props.change(todo.id)} className='inp'></input>
                                
                                <span onDoubleClick={props.Edit}>{todo.title}</span>
                                
                         {edits ? <input type='text' onChange={(e) => setTitle(e.target.value)} onBlur={props.Exit} value={todo.title} /> :
                
                        <span  onDoubleClick={props.Edit}>{todo.title}</span>
                }
                    <div>
          
                                <button onClick={() => props.remove(todo.id)} className='btn1'>x</button>
                     </div>
                            </li>
                        )
                    })
                }
            </div>
    )
}

export default Header