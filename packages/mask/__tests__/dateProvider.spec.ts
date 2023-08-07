import { mask } from '../src';
describe('[MASK: DATE_PROVIDER]', () => {
  it('Should be able to pass a date value and the mask of this date along with the formatting to the unmask and return this value with the mask applied, together with the unmask with its mask informed by the user.', () => {
    expect(
      mask.date({
        value: '02091991',
        patternDate: {
          mask: 'DD/MM/YYYY',
          unmask: 'YYYY-MM-DD',
        },
      }),
    ).toEqual({
      unmask: '1991-09-02',
      value: '02/09/1991',
    });
    expect(
      mask.date({
        value: '02/09/1991',
        patternDate: {
          mask: 'DD/MM/YYYY',
          unmask: 'YYYY-MM-DD',
        },
      }),
    ).toEqual({
      unmask: '1991-09-02',
      value: '02/09/1991',
    });
    expect(
      mask.date({
        value: '02/Set/1991',
        patternDate: {
          mask: 'DD/Mmm/YYYY',
          unmask: 'YYYY/Mmm/DD',
        },
      }),
    ).toEqual({
      unmask: '1991/Set/02',
      value: '02/Set/1991',
    });
    expect(
      mask.date({
        value: '02/Set/1991',
        patternDate: {
          mask: 'DD/MMM/YYYY',
          unmask: 'YYYY/Mmm/DD',
        },
      }),
    ).toEqual({
      unmask: '1991/Set/02',
      value: '02/SET/1991',
    });
    expect(
      mask.date({
        value: 'SET021991',
        patternDate: {
          mask: 'MMM/DD/YYYY',
          unmask: 'YYYY/Mmm/DD',
        },
      }),
    ).toEqual({
      unmask: '1991/Set/02',
      value: 'SET/02/1991',
    });
    expect(
      mask.date({
        value: '',
        patternDate: {
          mask: 'Mmm/DD/YYYY',
          unmask: 'YYYY/MMM/DD',
        },
      }),
    ).toEqual({
      unmask: '',
      value: '',
    });
    expect(
      mask.date({
        value: 'SET021991',
        patternDate: {
          mask: 'MMM/DD/YYYY',
          unmask: 'MMM/DD/YYYY',
        },
      }),
    ).toEqual({
      unmask: 'SET/02/1991',
      value: 'SET/02/1991',
    });
    expect(
      mask.date({
        value: '19910902',
        patternDate: {
          mask: 'YYYY-MM-DD',
          unmask: 'DD-MM-YYYY',
        },
      }),
    ).toEqual({
      unmask: '02-09-1991',
      value: '1991-09-02',
    });
    expect(
      mask.date({
        value: 'SET021991',
        patternDate: {
          mask: 'Mmm-DD-YYYY',
          unmask: 'DD-MMM-YYYY',
        },
      }),
    ).toEqual({
      unmask: '02-SET-1991',
      value: 'Set-02-1991',
    });
  });
});
