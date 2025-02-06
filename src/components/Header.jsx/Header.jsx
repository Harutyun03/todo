import './Header.css'


function Header (props){
    return(
            <div className='box'>
                {
                    props.todo.map((todo) => {
                        return (
                            <li key={todo.id}>
                                <input type={'checkbox'} checked={todo.isDone} onChange={() => props.change(todo.id)}></input>
                                <span>{todo.title}</span>
                                <button onClick={() => props.remove(todo.id)}>x</button>
                            </li>
                        )
                    })
                }
            </div>
    )
}

export default Header