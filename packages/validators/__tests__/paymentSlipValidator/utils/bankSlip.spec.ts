import { bankSlip } from '../../../src/lib/paymentSlipValidator/utils/bankSlip/index';

describe('[VALIDATORS: BANK_SLIP]', () => {
  it('Should be return true to bankSlip function call when passed digits correctly to bank slip in type typeable line or barcode and the data includes into map instance passed within argument', () => {
    const mapPaymentSlipData = new Map();
    let bankSlipTest = bankSlip({
      digits: '65590000020044250000594059050008194290000006050', //typeable line
      mapPaymentSlipData: mapPaymentSlipData,
    });
    expect(bankSlipTest).toBeTruthy();
    expect(Object.fromEntries(mapPaymentSlipData)).toEqual({
      bankCode: '655',
      bankName: 'Banco Votorantim S.A.',
      barCodeOrTypeableLine: 'Linha Digitável',
      price: '60.50',
      expirationDate: '01/08/2023',
      segmentPaymentSplip: 'Pagamento de Boletos Bancários',
    });
    mapPaymentSlipData.clear();
    bankSlipTest = bankSlip({
      digits: '65591942700000005000000000442500009390032700', //barcode
      mapPaymentSlipData: mapPaymentSlipData,
    });
    expect(bankSlipTest).toBeTruthy();
    expect(Object.fromEntries(mapPaymentSlipData)).toEqual({
      bankCode: '655',
      bankName: 'Banco Votorantim S.A.',
      barCodeOrTypeableLine: 'Cód. Barras',
      price: '5.00',
      expirationDate: '30/07/2023',
      segmentPaymentSplip: 'Pagamento de Boletos Bancários',
    });
    mapPaymentSlipData.clear();
    bankSlipTest = bankSlip({
      digits: '',
      mapPaymentSlipData: mapPaymentSlipData,
    });
    expect(bankSlipTest).toBeFalsy();
    expect(Object.fromEntries(mapPaymentSlipData)).toEqual({});
    mapPaymentSlipData.clear();
    bankSlipTest = bankSlip({
      digits: 'hjadhjahsuahsjhaklsajkhajkhsjk',
      mapPaymentSlipData: mapPaymentSlipData,
    });
    expect(bankSlipTest).toBeFalsy();
    expect(Object.fromEntries(mapPaymentSlipData)).toEqual({});
  });
});
