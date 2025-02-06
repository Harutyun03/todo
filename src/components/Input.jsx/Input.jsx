import './Input.css'



function Input(props){
    return(
        <div className='container'>
            <input
                
                type='text'
                value={props.text}
                onChange={(e) => props.changeValue(e.target.value)}>
                       
            </input>
                  

        </div>
    )
}

export default Input