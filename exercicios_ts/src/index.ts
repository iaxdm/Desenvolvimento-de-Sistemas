//Exercício 1
import { calculoDesconto } from "./exercicios/calculo-desconto";

console.clear();

console.log("Executando exercícios: \n");

console.log(
  "Exercício 1) \nValor do produto com desconto:",
  calculoDesconto(4000, "ELETRONICOS")
);

//Exercício 2
import { IUser, listarNomeUsuarios } from "./exercicios/usuarios";
const usuarios: IUser[] = [
  {
    id: 1,
    nome: "Marco",
    email: "mail@mail.com",
  },
  {
    id: 2,
    nome: "Marco2",
    email: "mail@mail.com",
  },
];

console.log(
  "\nExercício 2) \nLista de usuários:\n",
  listarNomeUsuarios(usuarios)
);

//Exercício 3
import { IProduto, agruparEstoque } from "./exercicios/estoque";
const produtos: IProduto[] = [
  { categoria: "Madeira", quantidade: 15 },
  { categoria: "Roupas", quantidade: 20 },
  { categoria: "Madeira", quantidade: 8 },
];

console.log(
  "\nExercício 3) \nSoma das quantidades por categoria:",
  agruparEstoque(produtos)
);

//Exercício 4
import { buscarPorId } from "./exercicios/buscar-id";

console.log("\nExercício 4) \nBuscador por id:", buscarPorId(usuarios, 2));

//Exercício 5
import { mensagemStatus, StatusEnum } from "./exercicios/enum";

console.log(
  "Exercício 5) \nStatus pedido entregue:",
  mensagemStatus(StatusEnum.Entregue)
);
