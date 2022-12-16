import { useState } from 'react';
import Banner from './componentes/banner';
import Formulario from './componentes/formulario';
import Integrantes from './componentes/integrantes';
import Rodape from './componentes/rodape';
import Times from './componentes/time';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const cargos = [
    {
      id: uuidv4(),
      cargo: "Server Dev",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9"
    },
    {
      id: uuidv4(),
      cargo: "Precoce",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF"
    },
    {
      id: uuidv4(),
      cargo: "Server DLC",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8"
    },
    {
      id: uuidv4(),
      cargo: "Bot",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9"
    },
    {
      id: uuidv4(),
      cargo: "Mara",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5"
    }
  ]

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: "Brazilian Samurai",
      imagem: "https://cdn.discordapp.com/avatars/491592828397420555/48587ebc41c5fdb2bc3f8a7b045050b1.webp?size=160",
      cargo: cargos[0].cargo
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "(っ◔◡◔)っ",
      imagem: "https://cdn.discordapp.com/avatars/402485538587934725/012c1e281bce2fc26f4506592379a2b1.webp?size=100",
      cargo: cargos[0].cargo
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Zoldan",
      imagem: "https://cdn.discordapp.com/avatars/332200361492480000/9ab3f23c7b4b78f2afcf3a35c68824a5.webp?size=100",
      cargo: cargos[0].cargo
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Jaozito",
      imagem: "https://cdn.discordapp.com/avatars/767137733164138496/92e058d637bf9ab8422e10fde6619da0.webp?size=160",
      cargo: cargos[1].cargo
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Mandioca",
      imagem: "https://cdn.discordapp.com/avatars/315650567726825482/ab5bc9933557ca0b1a9b19107b51b6df.webp?size=160",
      cargo: cargos[1].cargo
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "BigPapa",
      imagem: "https://cdn.discordapp.com/avatars/496321170065326080/bb0514c4e4947be1ba7579b721cef707.webp?size=100",
      cargo: cargos[2].cargo
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Dioguin",
      imagem: "https://cdn.discordapp.com/avatars/565987200492240923/14b1c3c504920b6903fe1da169c7beb9.webp?size=160",
      cargo: cargos[2].cargo
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Jota",
      imagem: "https://cdn.discordapp.com/avatars/313499393955332097/530f9caa64ec73b1df95b8d918882862.webp?size=100",
      cargo: cargos[2].cargo
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Samuka",
      imagem: "https://cdn.discordapp.com/avatars/329366903762190339/4fd6579019874576f6c4b999a13fb9d3.webp?size=100",
      cargo: cargos[2].cargo
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Zoio",
      imagem: "https://cdn.discordapp.com/avatars/332191044294934538/692250a4a7c29fa674ae48833703b4ff.webp?size=100",
      cargo: cargos[2].cargo
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Lorita",
      imagem: "https://cdn.discordapp.com/avatars/297153970613387264/da47bfae527928be899a3cd58b27aa3a.webp?size=100",
      cargo: cargos[3].cargo
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Mudae",
      imagem: "https://cdn.discordapp.com/avatars/432610292342587392/29cb28fbf65a3958105026ab03abd306.webp?size=100",
      cargo: cargos[3].cargo
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Nekobot",
      imagem: "https://cdn.discordapp.com/avatars/310039170792030211/237b80900f1dc974efcd1758701b594d.webp?size=100",
      cargo: cargos[3].cargo
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Nekotina",
      imagem: "https://cdn.discordapp.com/avatars/429457053791158281/3bd16beb2e1b91a5958ead2825c4f451.webp?size=100",
      cargo: cargos[3].cargo
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Pancake",
      imagem: "https://cdn.discordapp.com/avatars/239631525350604801/fe9c3f7c16d38f781aad8e135e588bdb.webp?size=100",
      cargo: cargos[3].cargo
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "! Mara ✟",
      imagem: "https://cdn.discordapp.com/avatars/906740830344187945/5d8bf356f1ca94b157743ab577d80d13.webp?size=100",
      cargo: cargos[4].cargo
    }
  ]

  const [integrantes, setIntegrante] = useState(inicial);

  const novoIntegrante = (integrante) => {

    console.log(integrante);
    setIntegrante([...integrantes, integrante]);

  }

  function deletarIntegrante(id) {
    setIntegrante(integrantes.filter(integrante => integrante.id !== id));
  }

  function setFavorito(id){
    setIntegrante(integrantes.map(integrante => {
      if (integrante.id === id) integrante.favorito = !integrante.favorito;
      return integrante;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario cargos={cargos.map(cargo => cargo.cargo)} integranteCadastrado={integrante => novoIntegrante(integrante)} />
      <Integrantes />
      {cargos.map(time => <Times
        setFavorito={setFavorito}
        key={time.id}
        id={time.id}
        nome={time.cargo}
        cor1={time.corPrimaria}
        cor2={time.corSecundaria}
        integrantes={integrantes.filter
          (integrante => integrante.cargo === time.cargo)
        }
        deletar={deletarIntegrante}
      />)}
      <Rodape />
    </div>
  );
}

export default App;
