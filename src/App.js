import { useState } from 'react';
import Banner from './componentes/banner';
import Formulario from './componentes/formulario';
import Times from './componentes/time';

function App() {

  const cargos = [
    {
      nome : "Server Dev",
      corPrimaria : "#FFBA05",
      corSecundaria : "#FFF5D9"
    },
    {
      nome : "Precoce",
      corPrimaria : "#FF8A29",
      corSecundaria : "#FFEEDF"
    },
    {
      nome : "Server DLC",
      corPrimaria : "#E06B69",
      corSecundaria : "#FDE7E8"
    },
    {
      nome : "Bot",
      corPrimaria : "#57C278",
      corSecundaria : "#D9F7E9"
    },
    {
      nome : "Mara",
      corPrimaria : "#DB6EBF",
      corSecundaria : "#FAE9F5"
    }
  ]

  const [integrantes,setIntegrante] = useState([]);

  const novoIntegrante = (integrante) => {

    console.log(integrante);
    setIntegrante([...integrantes, integrante]);

  }

  return (
    <div className="App">
      <Banner />
      <Formulario cargos={cargos.map( cargo => cargo.nome)}integranteCadastrado={integrante=>novoIntegrante(integrante)}/>
      {cargos.map(time=><Times key={time.nome} 
      nome={time.nome} 
      cor1={time.corPrimaria} 
      cor2={time.corSecundaria}
      integrantes={integrantes.filter(integrante=>integrante.cargo === time.nome)}
      />)}
    </div>
  );
}

export default App;
