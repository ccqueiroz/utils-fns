import { MockHTMLInputElement } from './../../src/mocks/MockHTMLInputElement';
import { ResponseMaskInterface } from '../../src/lib/contracts';
import { generalMask } from '../../src/lib/generalMask';

describe('[MASK: GENERAL_MASK]', () => {
  jest.useFakeTimers();
  it('should are passed how arguments the pattern and value without mask/pattern and the return value must be with the format of the pattern/mask passed with argument and unmask value withou pattern/mask.', () => {
    const patternCpf = '999.999.999-99';
    const expectResponseCpf: ResponseMaskInterface = {
      value: '123.456.789-01',
      unmask: '12345678901',
    };
    expect(
      generalMask({
        pattern: patternCpf,
        value: '12345678901',
      }),
    ).toEqual(expectResponseCpf);

    const patternDate = '99/99/9999';
    const expectResponseDate: ResponseMaskInterface = {
      value: '02/09/1991',
      unmask: '02091991',
    };
    expect(
      generalMask({
        pattern: patternDate,
        value: '02091991',
      }),
    ).toEqual(expectResponseDate);

    const expectResponseError: ResponseMaskInterface = {
      value: '',
      unmask: '',
    };
    expect(
      generalMask({
        pattern: patternDate,
        value: 'abcdess',
      }),
    ).toEqual(expectResponseError);

    const patternName = 'Waaa Uezab';
    const expectResponseName: ResponseMaskInterface = {
      value: 'Caio Cezar',
      unmask: 'CaioCar',
    };
    expect(
      generalMask({
        pattern: patternName,
        value: 'caio CezaR',
      }),
    ).toEqual(expectResponseName);
  });
  it('should be return empty value and unmask when the user does not pass a valid mask / pattern and must trigger a console.log to the user.', () => {
    console.log = jest.fn();
    const consoleSpy = jest.spyOn(console, 'log');
    const patternNoMask = 'return-empty';
    const expectResponseNoMask: ResponseMaskInterface = {
      value: '',
      unmask: '',
    };
    expect(
      generalMask({
        pattern: patternNoMask,
        value: '12345678901',
      }),
    ).toEqual(expectResponseNoMask);
    expect(consoleSpy).toHaveBeenCalled();

    const patternEmpty = '';
    const expectResponseEmpty: ResponseMaskInterface = {
      value: '',
      unmask: '',
    };
    expect(
      generalMask({
        pattern: patternEmpty,
        value: '12345678901',
      }),
    ).toEqual(expectResponseEmpty);

    consoleSpy.mockRestore();
  });
  it('A focus event must be passed to the generalMask and it must correctly call the setSelectionRange of the event.target, passing the caret positions as parameters after the input receives focus.', async () => {
    const mockInputElement = new MockHTMLInputElement();
    mockInputElement.value = '123.456.7890';
    mockInputElement.selectionStart = 12;
    const mockEvent: Partial<Event> = {
      type: 'focus',
      target: mockInputElement,
    };
    const patternCpf = '999.999.999-99';

    generalMask({
      pattern: patternCpf,
      value: '1234567890',
      event: mockEvent as Event,
    });

    jest.advanceTimersByTime(12);
    jest.runAllTimers();

    expect(mockInputElement.setSelectionRange).toHaveBeenCalledWith(12, 12);
  });
  it('A change event must be passed to the generalMask and it must correctly call the setSelectionRange of the event.target, passing the caret positions as parameters after the input is typed.', async () => {
    const mockInputElement = new MockHTMLInputElement();
    mockInputElement.value = '123.456.7890-';
    mockInputElement.selectionStart = 13;
    const mockEvent: Partial<Event> = {
      type: 'change',
      target: mockInputElement,
    };
    const patternCpf = '999.999.999-99';

    generalMask({
      pattern: patternCpf,
      value: '1234567890',
      event: mockEvent as Event,
    });

    jest.advanceTimersByTime(12);
    jest.runAllTimers();

    expect(mockInputElement.setSelectionRange).toHaveBeenCalledWith(13, 13);
  });
});
