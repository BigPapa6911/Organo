import "./cargos.css"

const Cargos = (props) => {

    const digitado = (evento) => {
        props.alterado(evento.target.value);
    }

    return(
        
        <div className="cargos">
            <label>
                {props.label}
            </label>
            <select onChange={digitado} required={props.obrigatorio} valor={props.value}>
                {props.itens.map(item=><option key={item}>{item}</option>)}
            </select>
        </div>

    )
}

export default Cargos
