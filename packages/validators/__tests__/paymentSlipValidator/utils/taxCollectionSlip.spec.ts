import { paymentSlipSegmentType } from '../../../src/lib/contracts/paymentSlipValidator/index';
import { taxColletionSlip } from '../../../src/lib/paymentSlipValidator/utils/taxColletion/index';
describe('[VALIDATORS: BANK_SLIP]', () => {
  it('Should be return false when not passed digits or digits passed are letters', () => {
    expect(
      taxColletionSlip({
        digits: '',
      }),
    ).toBeFalsy();
    expect(
      taxColletionSlip({
        digits: 'kjskajahjsahjkhajkhsjk/oiu12ui1ihhb',
      }),
    ).toBeFalsy();
    expect(
      taxColletionSlip({
        digits: '00190500954014481606906',
      }),
    ).toBeFalsy();
    expect(
      taxColletionSlip({
        digits: '00190500954014481606906809350314337370000000100',
      }),
    ).toBeFalsy();
    expect(
      taxColletionSlip({
        digits: '838900000072120900313006278178958076000093245181', //tyable line
      }),
    ).toBeTruthy();
    expect(
      taxColletionSlip({
        digits: '84610000000319901090110049617944480805321901', //barcode
      }),
    ).toBeTruthy();
  });
  it('Should be return true when passed param validByIfIsBarCodeOrTypeableLinand typeof payment slip to be equal this argument.', () => {
    expect(
      taxColletionSlip({
        digits: '83820000000262600110070344656001020523551673', //barcode
        paramsPaymentSlipValidator: {
          validByIfIsBarCodeOrTypeableLine: 'Linha Digitável',
        },
      }),
    ).toBeFalsy();
    expect(
      taxColletionSlip({
        digits: '8382000000026260011007034465', //invalid barcode
        paramsPaymentSlipValidator: {
          validByIfIsBarCodeOrTypeableLine: 'Linha Digitável',
        },
      }),
    ).toBeFalsy();
    expect(
      taxColletionSlip({
        digits: '846100000005319901090112004961794445808053219016', //typeable line
        paramsPaymentSlipValidator: {
          validByIfIsBarCodeOrTypeableLine: 'Linha Digitável',
        },
      }),
    ).toBeTruthy();
    expect(
      taxColletionSlip({
        digits: '84610000000319901090110049617944480805321901', //barcode
        paramsPaymentSlipValidator: {
          validByIfIsBarCodeOrTypeableLine: 'Cód. Barras',
        },
      }),
    ).toBeTruthy();
    expect(
      taxColletionSlip({
        digits: '846100000005319901090112004961794445808053219016', //typeable line
        paramsPaymentSlipValidator: {
          validByIfIsBarCodeOrTypeableLine: 'Cód. Barras',
        },
      }),
    ).toBeFalsy();
  });
  it('Should be return true when passed digits correctly to bank slip and the passed bank validation by name or code', () => {
    expect(
      taxColletionSlip({
        digits: '846100000005319901090112004961794445808053219016', //typeable line
        paramsPaymentSlipValidator: {
          validByBank: '655',
        },
      }),
    ).toBeFalsy();
    expect(
      taxColletionSlip({
        digits: '84610000000319901090110049617944480805321901', //barcode
        paramsPaymentSlipValidator: {
          validSegmentType: 'Taxas de Telecomunicações',
        },
      }),
    ).toBeTruthy();
    expect(
      taxColletionSlip({
        digits: '84610000000319901090110049617944480805321901', //barcode
        paramsPaymentSlipValidator: {
          validSegmentType: 'Taxas de Telecomunicações',
          validByIfIsBarCodeOrTypeableLine: 'Cód. Barras',
        },
      }),
    ).toBeTruthy();
    expect(
      taxColletionSlip({
        digits: '84610000000319901090110049617944480805321901', //barcode
        paramsPaymentSlipValidator: {
          validSegmentType:
            'Foo Bar' as (typeof paymentSlipSegmentType)[keyof typeof paymentSlipSegmentType],
        },
      }),
    ).toBeFalsy();
    expect(
      taxColletionSlip({
        digits: '838900000072120900313006278178958076000093245181', //typeable line
        paramsPaymentSlipValidator: {
          validSegmentType:
            'Foo Bar' as (typeof paymentSlipSegmentType)[keyof typeof paymentSlipSegmentType],
        },
      }),
    ).toBeFalsy();
    expect(
      taxColletionSlip({
        digits: '838900000072120900313006278178958076000093245181', //typeable line
        paramsPaymentSlipValidator: {
          validSegmentType: 'Taxas de Energia Elétrica e Gás',
        },
      }),
    ).toBeTruthy();
    expect(
      taxColletionSlip({
        digits: '838900000072120900313006278178958076000093245181', //typeable line
        paramsPaymentSlipValidator: {
          validSegmentType: 'Taxas de Energia Elétrica e Gás',
          validByIfIsBarCodeOrTypeableLine: 'Linha Digitável',
        },
      }),
    ).toBeTruthy();
  });
});
