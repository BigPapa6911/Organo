import "./rodape.css"

const Rodape = () => {

    return(
        <section className="rodape">
            <div className="logos">
                <img src="imagens/fb.png" alt="Icone facebook" />
                <img src="imagens/tw.png" alt="Icone twitter" />
                <img src="imagens/ig.png" alt="Icone instagram" />
            </div>
            <div>
                <img src="imagens/logo.png" alt="logo do organograma" />
            </div>
            <div className="developer">
                <h3>Developed by GusMaia</h3>
            </div>
        </section>
    )

}

export default Rodape
