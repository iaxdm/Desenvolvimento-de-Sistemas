export interface IUser {
  id: number;
  nome: string;
  email: string;
}

export function listarNomeUsuarios(lista_usuarios: IUser[]) {
  return lista_usuarios.map((usuario) => usuario.nome);
}
