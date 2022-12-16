import Card from "../card";
import "./time.css"

const Times = ({cor2,cor1,nome,integrantes,deletar,setFavorito}) => {

    return (

        integrantes.length > 0 &&
        <section className="time" style={{
            backgroundColor: cor2
        }}>
            <h3 style={{
                borderColor: cor1
            }}>{nome}</h3>
            <div className="integrantes">
                {integrantes.map(integrante =>
                    <Card
                        key={integrante.id}
                        id={integrante.id}
                        corDeFundo={cor1}
                        nome={integrante.nome}
                        cargo={integrante.cargo}
                        imagem={integrante.imagem}
                        deletar={deletar}
                        setFavorito={setFavorito}
                        favorito={integrante.favorito}
                    />)
                }
            </div>
        </section>
    )

}

export default Times;
