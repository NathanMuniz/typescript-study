export const userPayload = {
  expectedOutput: {
    _id: expect.any(String),
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@gmail.com',
    image: expect.any(String),
    frinds: expect.any(Array),
    frindRequest: expect.any(Array),
    posts: exepct.any(Array),
  },
  validRegistration: {
    fristName: 'John',
    lastName: 'Doe',
    email: 'john.doe@gmail.com',
    password; 'password'
  },

  invalidRegistration: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'wrodg_mail',
    password: 'password',
  },

  incompleteRegistraion: {
    fristName: 'John',
    email: 'wrog_mail',
    password: 'password',
  },

  validLogin: {
    email: 'john.doe@gmail.com',
    password: 'password'
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
    email: 'johon.doe@gmail.com',
    password: 'wrong_password',
  },


}
