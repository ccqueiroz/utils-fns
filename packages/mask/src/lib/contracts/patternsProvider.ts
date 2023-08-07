export const patternsToUseInProvider = {
  cpf: '999.999.999-99',
  cnpj: '99.999.999/9999-99',
  nis: '999.99999.99-9',
  phone: {
    default: {
      a: '(99) 9999-9999',
      b: '(99) 99999-9999',
    },
    phonePublicServices: {
      a: '999',
      b: '999-9',
    },
    phoneWithDDI: {
      a: '+99 99 9999-9999',
      b: '+99 99 99999-9999',
    },
  },
  cep: '99999-999',
  'boleto-bancario': {
    bank: {
      a: '99999.99999 99999.999999 99999.999999 9 99999999999999', //typeable line - 47 digs
      b: '99999999999999999999999999999999999999999999', //barcode - 44 digs
    },
    taxColection: {
      a: '99999999999-9 99999999999-9 99999999999-9 99999999999-9', //typeable line 48 digs
      b: '99999999999999999999999999999999999999999999', //barcode 44 digs
    },
  },
  renavam: '99999999999',
  'titulo-eleitor': '9999.9999.9999',
  cnh: '999999999-99',
  date: {
    masks: {
      'DD/MM/YYYY': '99/99/9999',
      'DD-MM-YYYY': '99-99-9999',
      'MM-DD-YYYY': '99-99-9999',
      'MM/DD/YYYY': '99/99/9999',
      'YYYY/MM/DD': '9999/99/99',
      'YYYY-MM-DD': '9999-99-99',
      'DD/Mmm/YYYY': '99/Wbb/9999',
      'DD-Mmm-YYYY': '99-Wbb-9999',
      'DD/MMM/YYYY': '99/WWW/9999',
      'DD-MMM-YYYY': '99-WWW-9999',
    },
    unmask: {
      'DD/MM/YYYY': '99/99/9999',
      'DD-MM-YYYY': '99-99-9999',
      'MM-DD-YYYY': '99-99-9999',
      'MM/DD/YYYY': '99/99/9999',
      'YYYY/MM/DD': '9999/99/99',
      'YYYY-MM-DD': '9999-99-99',
      'DD/Mmm/YYYY': '99/Wbb/9999',
      'DD-Mmm-YYYY': '99-Wbb-9999',
      'DD/MMM/YYYY': '99/WWW/9999',
      'DD-MMM-YYYY': '99-WWW-9999',
    },
  },
} as const;
