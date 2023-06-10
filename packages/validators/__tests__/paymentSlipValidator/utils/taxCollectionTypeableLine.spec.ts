import { taxCollectionTypeableLine } from './../../../src/lib/paymentSlipValidator/utils/taxColletion/taxCollectionTypeableLine/index';
describe('[VALIDATORS: TAX_COLLECTION_TYPEABLE_LINE]', () => {
  it('Should be return true, when passed digits typeable line format correctly', () => {
    expect(
      taxCollectionTypeableLine({
        digits: '846100000005319901090112004961794445808053219016', //valid code mod10
      }),
    ).toBeTruthy();
    expect(
      taxCollectionTypeableLine({
        digits: '838900000072120900313006278178958076000093245181', //valid code mod11
      }),
    ).toBeTruthy();
    expect(
      taxCollectionTypeableLine({
        digits: 'absjhkjsa/klslajsjaks', //invalid code
      }),
    ).toBeFalsy();
    expect(
      taxCollectionTypeableLine({
        digits: '8382000000026260011007034465600102', //invalid code
      }),
    ).toBeFalsy();
    expect(
      taxCollectionTypeableLine({
        digits: '238900000072120900313006278178958076000093245181', //invalid code
      }),
    ).toBeFalsy();
    expect(
      taxCollectionTypeableLine({
        digits: '833900000072120900313006278178958076000093245181', //invalid code
      }),
    ).toBeFalsy();
  });
  it('Should be return false when passed digits correctly to tax collection slip in type typeable line and is passed bank validation by name or code', () => {
    expect(
      taxCollectionTypeableLine({
        digits: '846100000005319901090112004961794445808053219016',
        paramsPaymentSlipValidator: {
          validByBank: '001',
        },
      }),
    ).toBeFalsy();
    expect(
      taxCollectionTypeableLine({
        digits: '846100000005319901090112004961794445808053219016',
        paramsPaymentSlipValidator: {
          validByBank: 'Banco A. J. Renner S.A.',
        },
      }),
    ).toBeFalsy();
  });
  it('Should be return true when passed digits correctly to tax collection slip in type typeable line and is passed bank validation by segment type', () => {
    expect(
      taxCollectionTypeableLine({
        digits: '846100000005319901090112004961794445808053219016',
        paramsPaymentSlipValidator: {
          validSegmentType: 'Taxas de Telecomunicações',
        },
      }),
    ).toBeTruthy();
    expect(
      taxCollectionTypeableLine({
        digits: '838900000072120900313006278178958076000093245181',
        paramsPaymentSlipValidator: {
          validSegmentType: 'Taxas de Energia Elétrica e Gás',
        },
      }),
    ).toBeTruthy();
    expect(
      taxCollectionTypeableLine({
        digits: '838900000072120900313006278178958076000093245181',
        paramsPaymentSlipValidator: {
          validSegmentType: 'Taxas Municipais',
        },
      }),
    ).toBeFalsy();
  });
  it('Should be return true when passed digits correctly to tax collection slip in type typeable line and is passed price/amount validation', () => {
    expect(
      taxCollectionTypeableLine({
        digits: '838900000072120900313006278178958076000093245181',
        paramsPaymentSlipValidator: {
          validByPrice: 712.09,
        },
      }),
    ).toBeTruthy();
    expect(
      taxCollectionTypeableLine({
        digits: '838900000072120900313006278178958076000093245181',
        paramsPaymentSlipValidator: {
          validByPrice: '712,09',
        },
      }),
    ).toBeTruthy();
    expect(
      taxCollectionTypeableLine({
        digits: '838900000072120900313006278178958076000093245181',
        paramsPaymentSlipValidator: {
          validByPrice: '712.09',
        },
      }),
    ).toBeTruthy();
    expect(
      taxCollectionTypeableLine({
        digits: '838900000072120900313006278178958076000093245181',
        paramsPaymentSlipValidator: {
          validByPrice: 'abjhsjahsjahsj712.09',
        },
      }),
    ).toBeTruthy();
    expect(
      taxCollectionTypeableLine({
        digits: '838900000072120900313006278178958076000093245181',
        paramsPaymentSlipValidator: {
          validByPrice: '31.99',
        },
      }),
    ).toBeFalsy();
  });
  it('Should be return true when passed digits correctly to tax collection slip in type typeable line and is passed valid date expiration validation', () => {
    expect(
      taxCollectionTypeableLine({
        digits: '838900000072120900313006278178958076000093245181',
        paramsPaymentSlipValidator: {
          validByDate: '2023-07-10',
        },
      }),
    ).toBeFalsy();
  });
  it('Should be return true when passed all arguments correctly to tax collection slip in type typeable line and return false if any argument to be incorrectly', () => {
    expect(
      taxCollectionTypeableLine({
        digits: '838900000072120900313006278178958076000093245181',
        paramsPaymentSlipValidator: {
          validByPrice: '712.09',
          validSegmentType: 'Taxas de Energia Elétrica e Gás',
        },
      }),
    ).toBeTruthy();
    expect(
      taxCollectionTypeableLine({
        digits: '846100000005319901090112004961794445808053219016',
        paramsPaymentSlipValidator: {
          validByPrice: 31.99,
          validSegmentType: 'Taxas de Telecomunicações',
        },
      }),
    ).toBeTruthy();
    expect(
      taxCollectionTypeableLine({
        digits: '838900000072120900313006278178958076000093245181',
        paramsPaymentSlipValidator: {
          validByDate: '2023-07-10',
          validByPrice: '712.09',
          validSegmentType: 'Taxas de Energia Elétrica e Gás',
        },
      }),
    ).toBeFalsy();
  });
});
