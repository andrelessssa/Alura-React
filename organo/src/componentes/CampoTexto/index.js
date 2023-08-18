import './CampoTexto.css'
const CanpoTexto = (props) => {

    
    return(
        <div className= "capo-texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </div>
    )    

}
export default CanpoTexto