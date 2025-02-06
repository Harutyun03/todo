import './Button.css'


function Button(props){
    return(

        <button onClick={props.addtodos} className='btn'>Add</button>
    )
}

export default Button