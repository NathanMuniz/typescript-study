
// Pasta home que tem as interfaces iniciais responsável por direcionar para a interface correta 


interface Page {
  performAction: () => void;
}

interface SModuleConfig {
  SModuelA: {
    name: 'sModuleA';
    performSomehitng: () => void;
  }
}

interface ModuleConfig {
  PIX: {
    v1: {

    };
  };
}




type IdNew = string
type Agencia = '0001'
  | '0020'
  | '0021'
  | string
  ;

interface corelib {
  unicoX: () => string
}


type Core<M extends keyof ModuleConfig> = {
  module: ModuleConfig[M];
  getCore: {
    getUri: () => string;
    getBloquedUser: () => Array<IdNew>;
    getDir: (uri: string) => 'localhost' | 'contause.digital/Xapp';
    getAssocicaao: () => Agencia;
    getUnicoAcesso: corelib
  };
}







const pixDTransferencia: Page = {
  performAction: () => {
    const corePix: Core<'PIX'>
    corePix.module.v1.execute();
    corePix.getCore.bloquedUser.getBloquedUser;
  }
}


const home: Page[] = [pixDTransferencia];



// Usuário entrou em uma url. 
function routeSystem(url: string) {
  home[url].performAction();
}


routeSystem('pixD_tranferencia');

:
