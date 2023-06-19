
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
    v1: { execute: () => void };
  };
}

const getBaseCore = () => {
  return 1 + 1;
}

const getBloquedUser = () => {
  return "oi";

}




type Core<M extends keyof ModuleConfig> = {
  module: ModuleConfig[M];
}


const corePix: Core<'PIX'> = {
  module: {
    v1: {
      execute: () => {
        console.log('Executing v1 of PIX');
      },
    },
  },
};




const pixDTransferencia: Page = {
  performAction: () => {
    const corePix: Core<'PIX'>
    corePix.module.v1.execute();
  }
}


const home: Page[] = [pixDTransferencia];



// Usuário entrou em uma url. 
function routeSystem(url: string) {
  home[url].performAction();
}


routeSystem('pixD_tranferencia');

:

