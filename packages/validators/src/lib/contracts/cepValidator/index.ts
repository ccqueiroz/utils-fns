export type CepValidatorType = string | undefined;

export interface CepInterface {
  cep: string | null;
  uf: string | null;
  bairro: string | null;
  complemento: string | null;
  cidade: string | null;
  logradouro: string | null;
  estado: string | null;
  enderecoPostal: string | null;
  isValid: boolean;
  error?: string;
}
