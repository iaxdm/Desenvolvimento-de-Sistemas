export const buscarPorId = <T extends { id: number }>(
  itens: T[],
  id: number
): T | undefined => itens.find((item) => item.id === id);
