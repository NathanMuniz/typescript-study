import { Usuario } from "../models/cadastro";

export const validaCampos = async (body: Usuario) => {
  if (body.email.indexOf('') != -1 && body.senha.length >= 8 && body.senha.length <= 12 && body.nome != '' && body.nome.length >= 3) {
    return true;
  }
  else if (body.email.indexOf('') != -1 && body.senha.length >= 8 && body.senha.length <= 12 && body.nome != '' &&) {
    return false
  }
};
