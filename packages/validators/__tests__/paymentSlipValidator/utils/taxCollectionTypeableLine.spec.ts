import { taxCollectionTypeableLine } from './../../../src/lib/paymentSlipValidator/utils/taxColletion/taxCollectionTypeableLine/index';
describe('[VALIDATORS: TAX_COLLECTION_TYPEABLE_LINE]', () => {
  it('Should be return true to taxCollectionBarCode function call when passed digits correctly to bank slip in type typeable line and the data includes into map instance passed within argument', () => {
    const mapTaxCollectionTypeableLineTest = new Map();
    const taxCollectionTypeableLineMod10Test = taxCollectionTypeableLine({
      digits: '846100000005319901090112004961794445808053219016', //valid code mod10
      mapPaymentSlipData: mapTaxCollectionTypeableLineTest,
    });
    expect(taxCollectionTypeableLineMod10Test).toBeTruthy();
    expect(Object.fromEntries(mapTaxCollectionTypeableLineTest)).toEqual({
      expirationDate: null,
      price: '31.99',
      segmentPaymentSplip: 'Taxas de Telecomunicações',
    });
    mapTaxCollectionTypeableLineTest.clear();
    const taxCollectionTypeableLineMod11Test = taxCollectionTypeableLine({
      digits: '838900000072120900313006278178958076000093245181', //valid code mod11
      mapPaymentSlipData: mapTaxCollectionTypeableLineTest,
    });
    expect(taxCollectionTypeableLineMod11Test).toBeTruthy();
    expect(Object.fromEntries(mapTaxCollectionTypeableLineTest)).toEqual({
      expirationDate: null,
      price: '712.09',
      segmentPaymentSplip: 'Taxas de Energia Elétrica e Gás',
    });
    mapTaxCollectionTypeableLineTest.clear();
    const taxCollectionTypeableLineInvalidCode = taxCollectionTypeableLine({
      digits: '8382000000026260011007034465600102', //invalid code
      mapPaymentSlipData: mapTaxCollectionTypeableLineTest,
    });
    expect(taxCollectionTypeableLineInvalidCode).toBeFalsy();
    expect(Object.fromEntries(mapTaxCollectionTypeableLineTest)).toEqual({});
  });
});
