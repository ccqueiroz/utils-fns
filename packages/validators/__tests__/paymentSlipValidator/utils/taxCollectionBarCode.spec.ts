import { taxCollectionBarCode } from './../../../src/lib/paymentSlipValidator/utils/taxColletion/taxCollectionBarCode/index';
describe('[VALIDATORS: TAX_COLLECTION_BAR_CODE]', () => {
  it('Should be return true to taxCollectionBarCode function call when passed digits correctly to bank slip in type typeable line and the data includes into map instance passed within argument', () => {
    const mapTaxCollectionBarCodeTest = new Map();
    const taxCollectionBarCodeMod10Test = taxCollectionBarCode({
      digits: '84610000000319901090110049617944480805321901', //valid code mod10
      mapPaymentSlipData: mapTaxCollectionBarCodeTest,
    });
    expect(taxCollectionBarCodeMod10Test).toBeTruthy();
    expect(Object.fromEntries(mapTaxCollectionBarCodeTest)).toEqual({
      expirationDate: null,
      price: '31.99',
      segmentPaymentSplip: 'Taxas de Telecomunicações',
    });
    mapTaxCollectionBarCodeTest.clear();
    const taxCollectionBarCodeMod11Test = taxCollectionBarCode({
      digits: '83820000000262600110070344656001020523551673', //valid code mod11
      mapPaymentSlipData: mapTaxCollectionBarCodeTest,
    });
    expect(taxCollectionBarCodeMod11Test).toBeTruthy();
    expect(Object.fromEntries(mapTaxCollectionBarCodeTest)).toEqual({
      expirationDate: null,
      price: '26.26',
      segmentPaymentSplip: 'Taxas de Energia Elétrica e Gás',
    });
    mapTaxCollectionBarCodeTest.clear();
    const taxCollectionBarCodeInvalidCodeTest = taxCollectionBarCode({
      digits: '65591942700000005000000000442500009390032700', //invalid code
      mapPaymentSlipData: mapTaxCollectionBarCodeTest,
    });
    expect(taxCollectionBarCodeInvalidCodeTest).toBeFalsy();
    expect(Object.fromEntries(mapTaxCollectionBarCodeTest)).toEqual({});
  });
});
