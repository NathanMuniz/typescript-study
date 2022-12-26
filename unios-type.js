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
*/
function assertNever(x) {
    throw new Error("Uncexpecte object" + x);
}
function logger(s) {
    switch (s.state) {
        case "loading":
            return "loading request";
        case "failed":
            return "failied with code ".concat(s.code);
        case "success":
            return "got response";
    }
}
