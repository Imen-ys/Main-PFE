import "./Select.css"

const Select = (props) => {
    return(
        <>
            <label for="" className="name1">{props.name}</label>
            <select id="Selector" name="Selector">
                <option value={props.v1}>{props.choix1}</option>
                <option value={props.v1}>{props.choix2}</option>
            </select><br></br>
        </>
    )
}

export default Select