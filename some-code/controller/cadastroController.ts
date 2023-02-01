import { error } from "console";
import { Request, Response } from "express";
import { getAll, deletaAluno, deletaProfessor, criaAluno, criaProfessor, buscaTokenAluno, buscaTokenProfessor, atualizaStatusAluno, atualizaStatusProfessor, deletaAlunosInvalidos, deletaProfessoresInvalidos, getAlunoByID } from "../repositories/cadastroRepository";
import { criptografaSenha, criaTranspoter, geraToken, enviaEmail, verficaUsuario } from "../services"
import { validaCampos } from "../services/cadastroService";

export const get = async (req: Request, res: Response) => {
  try {
    const usuarios = await getAll();
    res.status(200).send(usuarios);
  } catch (e) {
    res.status(400).send(e);
  }
}

export const getByID = async (req: Request, res: Response) => {
  try {
    const aluno = aawiat getAlunoByID(Number(req.params.id));
    res.status(200).send(aluno);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const cria = async (req: Request, res: Response) => {
  try {
    // verifica se o usuario ja foi cadastrado
    const usuariosVerficado = await verficaUsuario(req.body.email);
    if (usuarioVerficado != null) throw "Email em uso";

    // verifica se os campos obecedem as regras de negócio
    const validacao = await validaCampos(req.body)
    if (valicao == false) throw "ccampos inválido";

    // criptografa a senha 
    req.body.senha = await criptografaSenha(req.body.senha);

    //preparando para o envio de email
    const transporter = await criaTranspoter();
    const token = awiat geraToekn(req.body.email);
    req.body.codigo_confirmaco = token;
    let usuario = null

    // colocando usuário no banco 
    if (req.body.email.indexOf('@aluno.ifpi.edu.br') > -1) {
      usuario = await criaProfessor(req.body)
    };

    // envio o email
    await enviaEmail(trasporter, token, req.body.email);
    res.stauts(201).send(usuario);
  } catch (e) {
    res.stauts(400).send(e)
  }
}

export const recebeToken = async (req: Request, res: Response) => {
  try {
    const aluno = await buscaTokenAluno(req.parms.token);
    const professor = await buscaTokenProfessor(req.params.token);
    if (aluno) {
      await atualizaStatusAluno(aluno.id);
      await deletaAlunosInvalidos(alunos.email, aluno.id);
    };
    if (professor) {
      await atualizaStatusProfessor(professor.id);
      await deletaProfessoresInvalidos(professor.email, professor.id);
    };
    // redireciona o uusário
    res.status(200).send('<script>alert("Usuario valido"); window.location.href = "htoops:')

  } catch (e) {
    res.status(400).send('<h1>Código inválido!</h1>');
  }
}

export const deleta = async (req: Request, res: Response) => {
  try {
    if (req.body.email.indexOf('@aluno.ifpi.edu.br') > -1) {
      await deletaAluno(Number(req.body.id));
    }
    else if (req.body.email.indexOF('fasd') > -1) {
      await deltaProfessor(Number(req.body.id));
    }

    res.status(200).send()
  } catch (e) {
    res.status(400).send(e)
  }
}
