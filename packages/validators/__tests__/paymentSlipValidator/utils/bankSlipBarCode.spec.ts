import { bankSlipBarCode } from './../../../src/lib/paymentSlipValidator/utils/bankSlip/bankSlipBarCode/index';

describe('[VALIDATORS: BANK_SLIP_BAR_CODE]', () => {
  it('Should be return true to bankSlipBarCode function call when passed digits correctly to bank slip in type barcode line and the data includes into map instance passed within argument', () => {
    const mapBankSlipBarCodeTest = new Map();
    let bankSlipBarCodeTest = bankSlipBarCode({
      digits: '65591942700000005000000000442500009390032700', //valid code
      mapPaymentSlipData: mapBankSlipBarCodeTest,
    });
    expect(bankSlipBarCodeTest).toBeTruthy();
    expect(Object.fromEntries(mapBankSlipBarCodeTest)).toEqual({
      bankCode: '655',
      bankName: 'Banco Votorantim S.A.',
      price: '5.00',
      expirationDate: '30/07/2023',
    });
    mapBankSlipBarCodeTest.clear();
    bankSlipBarCodeTest = bankSlipBarCode({
      digits: '55591942700000005000000000442500009390032700', //invalid code
      mapPaymentSlipData: mapBankSlipBarCodeTest,
    });
    expect(bankSlipBarCodeTest).toBeFalsy();
    expect(Object.fromEntries(mapBankSlipBarCodeTest)).toEqual({});
  });
});
