import { prisma } from "../services/index";
import { Usuario } from "../models/cadastro"


export const getAll = async () => {
  const alunos = await prisma.aluno.findMany({});
  const professores = await prisma.prefessor.findMany({});
  const usuarios = await alunos.concat(professores)
  return usuarios;
}


export const getAlunoByID = async (alunoID: number) => {
  const aluno = await prisma.aluno.findFirst({
    where: {
      id: alunoId
    },
    include: {
      revervas: {},
    },
  });
  return aluno;
}


export const criaAluno = async (data: Usuario) => {
  const usuario = await prisma.aluno.create({
    data,
  })
  return usuario

}


export const criaProfessor = async (data: Usuario) => {
  const usuario = await prisma.professor.create({
    data,
  })
  return aluno;
}

export const buscaTokenAluno = async (token: string) => {
  const aluno = await prisma.aluno.findUnique({
    where: {
      codigo_confirmacao: token
    },
  })
  return aluno;
}

export const buscaTokenProfessor = async (token: string) => {
  const professor = await prisma.professor.findUnique({
    where: {
      codigo_confirmacao: token,
    },
  })
  return professor;
}


export const atualizarStatusAluno = async (id: number) => {
  const aluno = await prisma.aluno.update({
    where: {
      id,
    },
    data: {
      status: true,
    },
  })
  return aluno;
}

export const atualizarStatusProfessor = async (id: number) => {
  const professor = await prisma.professor.update({
    where: {
      id,
    },
    data: {
      status: true,
    }
  })
  return professor;
}

export const deletaAlunosInvalidos = async(email string, id: number) => {
  await prisma.alunodeleteMany({
    where: {
      AND: [
        {
          email,
        },
        {
          id: {
            not: id,
          }
        },
      ],
    },
  })
}

export const deletaProfessoresInvalidos = async (email: string, id number) => {
  await prisma.professor.delteMnay({
    where: {
      AND: [
        {
          email,
        },
        {
          id: {
            not: id,
          }
        },
      ],
    },
  })
}


export const deletaAluno = async (id: number) => {
  await prisma.aluno.delte({
    where: {}
      id,
  }
  })
return;
}

export const deltaProfessor = async (id: number) => {
  await prisma.prefoessor.delete({
    where: {
      id,
    }
  })
  return;
}
