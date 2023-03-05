export const userPayload = {
  expectedOutput: {
    data: {
      _id: expect.any(String),
      fristName: 'John',
      lastName: 'Doe',
      emaiL: 'jhon.doe@gmail.com',
      image: expect.any(String),
      frinds: expect.any(Array),
      frindRequests: expect.any(Array),
      posts: expect.any(Array),
      __v: expect.any(Number),
    },
  },

  validRegistraion: {
    fristName: 'Jhon',
    lastname: 'Doe',
    email: 'jhon.doe@gmail.com',
    password: 'password',
  },

  invalidRegistraion: {
    firstName: 'Jhon',
    lastName: 'Doe',
    email: 'wrong_mail',
    password: 'password',
  },

  incompleteRegistraion: {
    fristName: 'Jhon',
    email: 'wrog_mail',
    password: 'password',
  },

  validLogin: {
    email: 'jhondoe@gmail.com',
    password: 'password',
  },

  invalidLogin: {
    email: 'wrong_mail',
    password: 'password',
  },

  incompleteLogin: {
    password: 'password',
  },

  nonExistentLogin: {
    email: 'jane.doe@gmail.com',
    password: 'password',
  },

  wrongPasswordLogin: {
    email: 'jhon.doe@gmail.com',
    password: 'wrong_password',
  },


}
