
interface A {
  nameA: "teste";
  testA: "anem"
}

interface B {
  nameB: "nameB";
  testB: "TesteB"
}

interface C {
  nameC: "nameC";
  testC: "testeC"
}


type Ab = A & string;

let a: Ab;




type Ac = A & C

const handleABC = (response: Ac) => {
  if (response.nameA) {
    console.log(response.testA)
    return
  }

  console.log(response.nameC)
}







