import "./campodetexto.css";

const CampoTexto = (props)=>{

    const digitado = (evento) => {
        props.alterado(evento.target.value);
    }

    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input type="text" placeholder={props.placeholder} required={props.obrigatorio} onChange={digitado} value={props.valor}/>
        </div>
    )
}

export default CampoTexto;
