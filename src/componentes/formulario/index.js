import './formulario.css'
import CampoTexto from "../campoDeTexto"
import Cargos from '../cargos'
import Botao from '../botao'
import { useState } from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('');
    const [cargo, setCargo] = useState('');

    const salvar = (evento) => {
        evento.preventDefault();
        console.log("Form submetido =>", nome, imagem, cargo);
        props.integranteCadastrado({
            nome,
            imagem,
            cargo
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={salvar}>
                <h2>
                    Preencha os dados para criar o card do integrante.
                </h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    alterado={valor=>setNome(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Insira o endereço da imagem"
                    valor={imagem}
                    alterado={valor=>setImagem(valor)}
                />
                <Cargos 
                obrigatorio={true} 
                label="Cargos" 
                itens={props.cargos}
                valor={cargo}
                alterado={valor=>setCargo(valor)} 
                />
                <Botao>
                    Adicionar integrante
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
