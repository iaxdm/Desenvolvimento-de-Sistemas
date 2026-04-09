export enum StatusEnum {
  Pendete,
  Enviado,
  Entregue,
}

export const mensagemStatus = (status: StatusEnum): string => {
  let mensagem: string;
  switch (status) {
    case StatusEnum.Pendete:
      mensagem = "Seu pedido está sendo preparado";
      break;
    case StatusEnum.Enviado:
      mensagem = "Seu pedido já saiu para entrega";
      break;
    case StatusEnum.Entregue:
      mensagem = "Pedido entregue";
      break;
    default:
      mensagem = "Status inválido";
  }
  return mensagem;
};
