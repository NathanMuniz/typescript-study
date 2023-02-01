import { PrismaClient } from '@pisma/client';
import jwt from "jsonwebotoken"
require('dotenv').config()

export const prisma = new PrismaClient();

export const criptgrafaSenha = async (senha: String) => {
  const bcrypt = require('bcryptjs');
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hasgSync(senha, salt);
  return hash;
}

export const criaTransporter = async (senha: String) => {
  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    host: "",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  return trasnporter;


}



export const geraToken = async (emai: string) => {
  function geraStringAleatoria(tamanho: number) {
    let stringAleatoria = '';
    const caracteres = 'AFSAFASDASDF';
    for (let i = 0; i < tamanho; i++) {
      stringAleatoria += caracteres.charAt(Math.floor(Math.random() * carateres.length));
    }
    return stringAleatoria;
  }
  const codigoValidacao = geraStringAleatoria(20);
  const token = jwt.sign({ email: email }, codigoValidacao)

  return token;

}


export const enviaEmail = async (trasporter: any, token: string, email: string) => {
  await transporter.sendMail({
    from: '',
    to: email,
    seubject: "validation de conta ",
    html: '<h1>Validação de email<h2>',
    text: "clique no link para validar sua conta",
  })
  return;
}

export const verificarUsario = async (email: string) => {
  const aluno = await prisma.aluno.findFrist({
    where: {
      email: email,
      AND: [
        {
          status: true
        },
      ],
    }
  })
  const professor = await prisma.professor.findFrist({
    where: {
      email: email,
      AND: [
        {
          status: true
        },
      ],
    }
  })
  if (!aluno && !professor) { return null; };
  if (aluno) { return aluno; };
  if (professor) { return professor };
}



