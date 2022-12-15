import { AiFillDelete, AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import "./card.css"

const Card = ({ nome, imagem, cargo, corDeFundo, deletar, id, favorito,favoritar }) => {

    function aoFavoritar(id) {
        favoritar(id);
    }

    return (

        <div className="card" key={id}>
            <AiFillDelete
                size={25}
                className="deletar"
                onClick={() => deletar(id)}
            />
            <div className="cabecalho" style={{
                backgroundColor: corDeFundo
            }}>
                <img src={imagem} alt={nome} />
            </div>

            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className="favoritar">
                    {favorito
                        ? <AiFillHeart size={25} onClick={aoFavoritar} />
                        : <AiOutlineHeart size={25} onClick={aoFavoritar} />
                    }
                </div>
            </div>
        </div>

    )

}

export default Card
