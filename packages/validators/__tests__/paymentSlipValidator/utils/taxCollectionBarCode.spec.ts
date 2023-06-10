import { taxCollectionBarCode } from './../../../src/lib/paymentSlipValidator/utils/taxColletion/taxCollectionBarCode/index';
describe('[VALIDATORS: TAX_COLLECTION_BAR_CODE]', () => {
  it('Should be return true, when passed digits barcode format correctly', () => {
    expect(
      taxCollectionBarCode({
        digits: '84610000000319901090110049617944480805321901', //valid code mod10
      }),
    ).toBeTruthy();
    expect(
      taxCollectionBarCode({
        digits: '83820000000262600110070344656001020523551673', //valid code mod11
      }),
    ).toBeTruthy();
    expect(
      taxCollectionBarCode({
        digits: '83220000000262600110070344656001020523551673', //valid code mod11
      }),
    ).toBeFalsy();
    expect(
      taxCollectionBarCode({
        digits: 'absjhkjsa/klslajsjaks', //invalid code
      }),
    ).toBeFalsy();
    expect(
      taxCollectionBarCode({
        digits: '8382000000026260011007034465600102', //invalid code
      }),
    ).toBeFalsy();
    expect(
      taxCollectionBarCode({
        digits: '2382000000026260011007034465600102', //invalid code
      }),
    ).toBeFalsy();
    expect(
      taxCollectionBarCode({
        digits: '65591942700000005000000000442500009390032700', //invalid code
      }),
    ).toBeFalsy();
  });
  it('Should be return false when passed digits correctly to tax collection slip in type barcode and is passed bank validation by name or code', () => {
    expect(
      taxCollectionBarCode({
        digits: '84610000000319901090110049617944480805321901',
        paramsPaymentSlipValidator: {
          validByBank: '001',
        },
      }),
    ).toBeFalsy();
    expect(
      taxCollectionBarCode({
        digits: '84610000000319901090110049617944480805321901',
        paramsPaymentSlipValidator: {
          validByBank: 'Banco A. J. Renner S.A.',
        },
      }),
    ).toBeFalsy();
  });
  it('Should be return true when passed digits correctly to tax collection slip in type barcode and is passed bank validation by segment type', () => {
    expect(
      taxCollectionBarCode({
        digits: '84610000000319901090110049617944480805321901',
        paramsPaymentSlipValidator: {
          validSegmentType: 'Taxas de Telecomunicações',
        },
      }),
    ).toBeTruthy();
    expect(
      taxCollectionBarCode({
        digits: '83820000000262600110070344656001020523551673',
        paramsPaymentSlipValidator: {
          validSegmentType: 'Taxas de Energia Elétrica e Gás',
        },
      }),
    ).toBeTruthy();
    expect(
      taxCollectionBarCode({
        digits: '83820000000262600110070344656001020523551673',
        paramsPaymentSlipValidator: {
          validSegmentType: 'Taxas Municipais',
        },
      }),
    ).toBeFalsy();
  });
  it('Should be return true when passed digits correctly to tax collection slip in type barcode and is passed price/amount validation', () => {
    expect(
      taxCollectionBarCode({
        digits: '83890000007120900313002781789580700009324518',
        paramsPaymentSlipValidator: {
          validByPrice: 712.09,
        },
      }),
    ).toBeTruthy();
    expect(
      taxCollectionBarCode({
        digits: '83890000007120900313002781789580700009324518',
        paramsPaymentSlipValidator: {
          validByPrice: '712,09',
        },
      }),
    ).toBeTruthy();
    expect(
      taxCollectionBarCode({
        digits: '83890000007120900313002781789580700009324518',
        paramsPaymentSlipValidator: {
          validByPrice: '712.09',
        },
      }),
    ).toBeTruthy();
    expect(
      taxCollectionBarCode({
        digits: '83890000007120900313002781789580700009324518',
        paramsPaymentSlipValidator: {
          validByPrice: 'abjhsjahsjahsj712.09',
        },
      }),
    ).toBeTruthy();
    expect(
      taxCollectionBarCode({
        digits: '83890000007120900313002781789580700009324518',
        paramsPaymentSlipValidator: {
          validByPrice: '31.99',
        },
      }),
    ).toBeFalsy();
  });
  it('Should be return true when passed digits correctly to tax collection slip in type barcode and is passed valid date expiration validation', () => {
    expect(
      taxCollectionBarCode({
        digits: '83890000007120900313002781789580700009324518',
        paramsPaymentSlipValidator: {
          validByDate: '2023-07-10',
        },
      }),
    ).toBeFalsy();
  });
  it('Should be return true when passed all arguments correctly to tax collection slip in type barcode and return false if any argument to be incorrectly', () => {
    expect(
      taxCollectionBarCode({
        digits: '83890000007120900313002781789580700009324518',
        paramsPaymentSlipValidator: {
          validByPrice: '712.09',
          validSegmentType: 'Taxas de Energia Elétrica e Gás',
        },
      }),
    ).toBeTruthy();
    expect(
      taxCollectionBarCode({
        digits: '84610000000319901090110049617944480805321901',
        paramsPaymentSlipValidator: {
          validByPrice: 31.99,
          validSegmentType: 'Taxas de Telecomunicações',
        },
      }),
    ).toBeTruthy();
    expect(
      taxCollectionBarCode({
        digits: '83890000007120900313002781789580700009324518',
        paramsPaymentSlipValidator: {
          validByDate: '2023-07-10',
          validByPrice: '712.09',
          validSegmentType: 'Taxas de Energia Elétrica e Gás',
        },
      }),
    ).toBeFalsy();
  });
});
