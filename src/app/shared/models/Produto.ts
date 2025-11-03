export class Produto {
  constructor(
    public id: number,
    public nome: string,
    public quantidade: number,
    public preco: number,
    public usado: number,
    public foto: string

  ) {}
}