import { taxColletionSlip } from '../../../src/lib/paymentSlipValidator/utils/taxColletion/index';
describe('[VALIDATORS: BANK_SLIP]', () => {
  it('Should be return false when not passed digits or digits passed are letters', () => {
    const mapPaymentSlipData = new Map();
    let taxCollectionTest = taxColletionSlip({
      digits: '838900000072120900313006278178958076000093245181',
      mapPaymentSlipData,
    });
    expect(taxCollectionTest).toBeTruthy();
    expect(Object.fromEntries(mapPaymentSlipData)).toEqual({
      bankCode: null,
      bankName: null,
      barCodeOrTypeableLine: 'Linha Digitável',
      price: '712.09',
      expirationDate: null,
      segmentPaymentSplip: 'Taxas de Energia Elétrica e Gás',
    });
    mapPaymentSlipData.clear();
    taxCollectionTest = taxColletionSlip({
      digits: '84610000000319901090110049617944480805321901',
      mapPaymentSlipData,
    });
    expect(taxCollectionTest).toBeTruthy();
    expect(Object.fromEntries(mapPaymentSlipData)).toEqual({
      bankCode: null,
      bankName: null,
      barCodeOrTypeableLine: 'Cód. Barras',
      price: '31.99',
      expirationDate: null,
      segmentPaymentSplip: 'Taxas de Telecomunicações',
    });
    mapPaymentSlipData.clear();
    taxCollectionTest = taxColletionSlip({
      digits: '',
      mapPaymentSlipData,
    });
    expect(taxCollectionTest).toBeFalsy();
    expect(Object.fromEntries(mapPaymentSlipData)).toEqual({});
    mapPaymentSlipData.clear();
    taxCollectionTest = taxColletionSlip({
      digits: 'lkjskahjahjkahsjkahsjkhajksh',
      mapPaymentSlipData,
    });
    expect(taxCollectionTest).toBeFalsy();
    expect(Object.fromEntries(mapPaymentSlipData)).toEqual({});
  });
});
