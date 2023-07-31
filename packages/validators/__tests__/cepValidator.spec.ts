import { mockFetch } from './../mocks';
import validators from '@utils-fns/validators/src/lib/index';

describe('[VALIDATOR: CNH]', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('Should be return false when is not passed cep value to argument in deps cep', () => {
    expect(validators.cep('').isValid()).toBeFalsy();
    expect(validators.cep('01001000').isValid()).toBeTruthy();
  });
  it('Should be return true when are passed cep value with 8 numbers with mask cep or no maskcep', () => {
    expect(validators.cep('01001000').isValid()).toBeTruthy();
    expect(validators.cep('01001-000').isValid()).toBeTruthy();
    expect(validators.cep('0100-1000').isValid()).toBeFalsy();
    expect(validators.cep('01001_000').isValid()).toBeFalsy();
    expect(validators.cep('01001-0').isValid()).toBeFalsy();
    expect(validators.cep('010010').isValid()).toBeFalsy();
  });

  it('Should be return one a object typeof CepInterface when this request to have cep value inside params.', async () => {
    const responseCepMock = {
      success: true,
      data: {
        estado: 'São Paulo',
        uf: 'SP',
        complemento: '- lado ímpar',
        cep: '01001-000',
        cidade: 'São Paulo',
        bairro: 'Sé',
        logradouro: 'Praça da Sé',
        enderecoPostal: 'Praça da Sé, lado ímpar, Sé, 01001-000, São Paulo/SP',
        isValid: true,
      },
    };

    global.fetch = mockFetch(responseCepMock);
    const dataCep = await validators.cep('01001000').getData();
    expect(dataCep).toEqual({ ...responseCepMock.data });
  });

  it('Should be return on an object typeof Cep Interface with the data to be null and with new attribute: error. Where this error must be equal a "Dados não encontrados!" when this request to have cep with wrong value inside params.', async () => {
    const responseCepMock = {
      success: false,
      error: 'Dados não encontrados!',
    };

    const responseGetDataCepMock = {
      cep: null,
      uf: null,
      bairro: null,
      complemento: null,
      cidade: null,
      logradouro: null,
      estado: null,
      enderecoPostal: null,
      isValid: false,
      error: 'Dados não encontrados!',
    };
    global.fetch = mockFetch(responseCepMock);
    const dataCep = await validators.cep('00000000').getData();
    expect(dataCep).toEqual(responseGetDataCepMock);
  });

  it('Should be return on an object typeof Cep Interface with the data to be null and with new attribute: error. Where this error must be equal a "Cep inválido!" when this request to have cep with wrong value inside params.', async () => {
    const responseCepMock = {
      success: false,
      error: 'Cep inválido!',
    };

    const responseGetDataCepMock = {
      cep: null,
      uf: null,
      bairro: null,
      complemento: null,
      cidade: null,
      logradouro: null,
      estado: null,
      enderecoPostal: null,
      isValid: false,
      error: 'Cep inválido!',
    };
    global.fetch = mockFetch(responseCepMock);
    const dataCep = await validators.cep('01ab1000').getData();
    expect(dataCep).toEqual(responseGetDataCepMock);
  });

  it('Should be return on an object typeof Cep Interface with the data to be null and with new attribute: error. Where this error must be equal a "Taxa limite de requisições excedida." when this request to have cep with wrong value inside params.', async () => {
    const responseCepMock = {
      success: false,
      error: 'Taxa limite de requisições excedida.',
    };

    const responseGetDataCepMock = {
      cep: null,
      uf: null,
      bairro: null,
      complemento: null,
      cidade: null,
      logradouro: null,
      estado: null,
      enderecoPostal: null,
      isValid: false,
      error: 'Taxa limite de requisições excedida.',
    };
    global.fetch = mockFetch(responseCepMock);
    const dataCep = await validators.cep('01001000').getData();
    expect(dataCep).toEqual(responseGetDataCepMock);
  });

  it('Should be return on an object typeof Cep Interface with the data to be null and with new attribute: error. Where this error must be equal a "Erro no servidor." when occur Server Error', async () => {
    const responseCepMock = {
      success: false,
      error: 'Erro no servidor.',
    };

    const responseGetDataCepMock = {
      cep: null,
      uf: null,
      bairro: null,
      complemento: null,
      cidade: null,
      logradouro: null,
      estado: null,
      enderecoPostal: null,
      isValid: false,
      error: 'Erro no servidor.',
    };
    global.fetch = mockFetch(responseCepMock, null, 'Erro no servidor.');
    const dataCep = await validators.cep('01001000').getData();
    expect(dataCep).toEqual(responseGetDataCepMock);
  });

  it('Should be cancel the request when a signal is sent to type AbortSignal as a parameter of the getData method.', async () => {
    const responseCepMock = {
      cep: null,
      uf: null,
      bairro: null,
      complemento: null,
      cidade: null,
      logradouro: null,
      estado: null,
      enderecoPostal: null,
      isValid: false,
      error: 'Requisição cancelada.',
    };
    const mockAbortController = new AbortController();
    const signal = mockAbortController.signal;
    mockAbortController.abort();
    global.fetch = mockFetch(responseCepMock, signal, 'Requisição cancelada.');
    const dataCep = await validators.cep('01001000').getData(signal);
    expect(dataCep).toEqual(responseCepMock);
  });
});
