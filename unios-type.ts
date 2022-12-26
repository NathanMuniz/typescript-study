/*

// Without Unios 

function padLeft(value: string, padding: any) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value
  }
  if (typeof padding === "string") {
    return padding + value;
  }

  throw new Error(`Expcred string or number type`)
}

// With Unios 
function padLeft(value: string, padding: any) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value
  }
  if (typeof padding === "string") {
    return padding + value;
  }

  throw new Error(`Expcred string or number type`)
}


*/


// Comumns Filds 


/*

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swin(): void;
  layEggs(): void;
}


declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();
pet.layEggs();

pet.layEggs()

*/




// Discriminating Unios


type NetworkLoadingState = {
  state: "loading"
}

type NetworkFailedState = {
  state: "failed";
  code: number
}

type NetworkSuccessState = {
  state: "success";
  reponse: {
    title: string;
    duration: number;
    summary: string;
  };
};

type NetworkFromCachedState = {
  state: "from_cache";
  id: string;
  response: NetworkSuccessState['reponse']
}

type AnotherType = {
  state: "another_type"
}

type NetworkState =
  | NetworkLoadingState
  | NetworkSuccessState
  | NetworkFailedState
  | NetworkFromCachedState
  | AnotherType;

/*
function logger(state: NetworkState): string {

  switch (state.state) {
    case "loading":
      return "Dowloading...";
    case "failed":
      return `Error ${state.code} dowlaoding `;
    case "success":
      return `Doewlaodes ${state.reponse.title} - ${state.reponse.summary}`;
  }

}



function assertNever(x: never): never {
  throw new Error("Uncexpecte object" + x)
}

function logger(s: NetworkState): string {

  switch (s.state) {
    case "loading":
      return "loading request";
    case "failed":
      return `failied with code ${s.code}`;
    case "success":
      return "got response";
    default:
      return assertNever(s)
  }

}

/*/

interface ErrorHandling {
  success: boolean;
  error: { message: string };
}

interface ArtworksData {
  artworks: { title: string }[]
}

interface ArtistsData {
  artists: { name: string }[];
}

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsReponse = ArtistsData & ErrorHandling;

const handleArtistsReponse = (response: ArtistsReponse) => {
  if (response.error) {
    console.error(response.error.message);
    return;
  }

  console.log(response.artists)

}





