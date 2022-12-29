interface Vehicle1 {
  id: number
}


// All propeties from Veihic 
interface Car1 extends Vehicle1 {
  name: string
}


type Vehicle2 = {
  id: number
}

// Not possible exted 
type Car2 = Veichel2 & {
  name: string
}
