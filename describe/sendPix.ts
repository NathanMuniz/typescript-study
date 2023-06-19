

// Prime Objects 
class Server {
  uri: "localhost" | "contause"
  host: string
}

type agencia = '0001' | '0020'


const especeificaModuloESModulo = (module, smodule) => { return { module, smdoule } }

const redirecionaParaCoreFile = () => { return coreFile() }

const coreFile = () => {


  const pagaHostEUriDoServer = () => {
    const server = new Server
    const uri = server.uri
    const host = server.host
    return { uri, host };
  }

  const pegaUsuariosBloqeuados = () => { }

  const pagaDirCaminhoDasPastas = () => {
    if (pagaHostEUriDoServer().uri == 'localhost') {
      const dir = 'localhost'
    }
    const dir = 'contause'
    return dir
  }

  const pegaAssocaicaoQueEAgencia = () => { const agencia: agencia = '0001' return agencia }

  const pegaUnicoAcesso = () => { }








} 
