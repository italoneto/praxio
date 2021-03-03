export class Formulario {

  constructor(
    public nomeRazaoSocial: string,
    public cpfCnpj: number,
    public telefone: number,
    public email: string,
    public senha: string,
    public cep: number,
    public logradouro: string,
    public numero: number,
    public bairro?: string,
  ) { }

}
