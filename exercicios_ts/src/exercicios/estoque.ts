export interface IProduto {
  categoria: string;
  quantidade: number;
}

export function agruparEstoque(produtos: IProduto[]): Record<string, number> {
  return produtos.reduce((acumulador, produtos) => {
    const categoria = produtos.categoria;

    if (acumulador[categoria]) {
      acumulador[categoria] += produtos.quantidade;
    } else {
      acumulador[categoria] = produtos.quantidade;
    }
    return acumulador;
  }, {} as Record<string, number>);
}
