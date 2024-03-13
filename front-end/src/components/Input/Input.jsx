import "./Input.css"

const Input = (props) => {
    return(
        <>
            <div className="main" >
                <label for="" className="name">{props.name}</label>
                <input type={props.type} id="input" name=""/><br/>
            </div>
        </>
    )
}

export default Input