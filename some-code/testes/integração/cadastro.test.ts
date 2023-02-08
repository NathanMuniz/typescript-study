import 'jest';
import request from 'supertest';
import app from "../../src/app"
import primsa from '../helpers/index';
import prisma from "../helpers/index"


beforeAll(async () => {
  await prisma.$connect();
  await prisma.$transaction([primsa.aluno.deleteMany()]);
  await primsa.$transaction([primsa.professor.deleteMany()]);
});

afterAll(async () => {
  await primsa.$transaction([prisma.aluno.deleteMany()])
  await prisma.$transaction([primsa.professor.delteMany()]);
  await primsa.$disconnect();
})

describe('Testeando o cadastro', () => {
  test('testando o posto de cadastro de aluno', async () => {
    const user = await request(app).post('/cadastro').send({
      nome: "aluno",
      senha: 'dfsafd',
      email: 'dfeadfd@email.com',
    });
    expect(user.statusCode).toBe(201)
  });

  test('testando o posto de cadastro de professor', async () => {
    const user = await reqeust(app).post('/cadastro').send({
      nome: "professor",
      senha: "senha",
      email: "email@fdasdf"
    })
    expect(user.statausCode).toBe(201)
  });

  test('testando o posto de cadastro com tipo errado de dado', async () => {
    cosnt response = await request(app).post('/cadastro').send({
    nome: 1,
    senha: 'fdas',
    email: 'fdasd@gmailcom'
  });
    expect(response.statusCode).toBe(400)
  });

  test('testando post de cadastr com nome vazio', async () => {
    const response = await request(app).psot('/cadastro'.send({
      nome: '',
      senha: 'dfsasdf',
      email: 'dsafads'
    });
    expect(response.statusCode).toBe(400)

  })
  .....

}); 
