import { CepInterface, CepValidatorType } from '../contracts/cepValidator';

type ConstructorInterface = CepValidatorType;

export class CepValidator {
  private cep: CepValidatorType;
  private regexCep = new RegExp(/^[0-9]{8}$|^[0-9]{5}-[0-9]{3}$/);
  private _URL_SEARCH_DATA_CEP = 'https://apigetcep.cloud/:cep';

  constructor(cep: ConstructorInterface) {
    this.cep = cep;
  }

  private formatUrlSearchDataCep(cep: string) {
    return this._URL_SEARCH_DATA_CEP.replace(':cep', cep);
  }

  public isValid() {
    if (!this.cep || !this.regexCep.test(this.cep)) return false;
    this.cep = this.cep?.replace(/\D/g, '');
    return true;
  }

  public async getData(signal?: AbortSignal | null) {
    const cepIsValid = this.isValid();

    const dataCep: CepInterface = {
      cep: null,
      uf: null,
      bairro: null,
      complemento: null,
      cidade: null,
      logradouro: null,
      estado: null,
      enderecoPostal: null,
      isValid: cepIsValid,
    };

    try {
      if (!cepIsValid) throw new Error('Cep inválido!');

      const responseCep = await fetch(
        this.formatUrlSearchDataCep(this.cep as string),
        {
          signal,
        },
      )
        .then((response) => response.json())
        .catch((error) => error);

      if (responseCep instanceof Error || responseCep instanceof DOMException) {
        if (
          (responseCep as unknown as Error)?.name.match(
            /CanceledError|AbortError/,
          )
        ) {
          throw new Error('Requisição cancelada.');
        } else {
          throw new Error('Erro no servidor.');
        }
      }

      if (!responseCep?.success) throw new Error(responseCep?.error);

      return {
        ...responseCep?.data,
        isValid: responseCep?.success,
      } as CepInterface;
    } catch (error) {
      return {
        ...dataCep,
        isValid: false,
        error: (error as unknown as Error)?.message,
      };
    }
  }

  public static init(deps: ConstructorInterface) {
    const instance = new CepValidator(deps);

    return instance;
  }
}
