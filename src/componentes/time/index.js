import Card from "../card";
import "./time.css"

const Times = (props)=> {

    return(

        props.integrantes.length > 0 &&
        <section className="time" style={{
            backgroundColor: props.cor2
        }}>
            <h3 style={{
                borderColor: props.cor1
            }}>{props.nome}</h3>
            <div className="integrantes">
                {props.integrantes.map(integrante => 
                    <Card 
                    key={integrante.nome}
                    corDeFundo={props.cor1}
                    nome={integrante.nome} 
                    cargo={integrante.cargo} 
                    imagem={integrante.imagem}/>)
                }
            </div>
        </section>
    )

}

export default Times;
