import "./Statistic.css"

const statistic = (props) =>{
    return(
        <>
            <div style={{display:"flex"}}>
                <div className='info' style={{background:props.color}}></div>
                <p className='details'>{props.details}</p>
            </div>
        </>
    )
}
export default statistic