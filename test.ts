let hellowWorld = "Hello World";


interface User {
  name: string;
  id: number;
}


class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }

}


function getAdminUser(n, i): User {
  let name = n
  let id = i

  const nathan: User = new UserAccount(name, id)

  return nathan
}

const user = new UserAccount("Murphy", 0)

console.log(getAdminUser(7, "test"))

