

type Method = any

class Resource {
  nameFiled: string
  pagination: number
  with: null
  alreadyFetchedRows: null
}


type ThurstControllerIndexMethod = any;

type View = any;

// Step 1
function redirectToTicketController() {
  return ticketControllerFile;
}


// Step 2
function ticketControllerFile(methodToAcess: string): Method {
  if (methodToAcess == 'index') {
    return indexFunction;
  }
}


// Step 3
function indexFunction(): ThurstControllerIndexMethod {
  // processNothing
  return thurstControllerIndexMethod
}


// Step 5
function thurstControllerIndexMethod(resource: string): View {

  const getTicketResource = (resoureName: string) => {
    return new Resource
  }

  const





}




function routeTicketFlow(): void {

  // Step 1: É redirecionado para um Controller 
  const getTicketControllerRedirectedPage = redirectToTicketController();

  // Step 2: Execute the Index funciont of TicketController 
  const getIndexFunction = getTicketControllerRedirectedPage('index');

  // Step 3: Execute The index Functino from ThurstController
  const getthurstControllerIndexMethod = getIndexFunction()

  // Setp 4: Execute The TrustControlerIndexFucntion 
  const getredirectToViewIndexWithData = getthurstControllerIndexMethod('ticket')

}




