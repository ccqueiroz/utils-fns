import { MockHTMLInputElement } from '../../src/mocks/MockHTMLInputElement';
import { maskNumbers } from './../../src/lib/maskNumbers/index';
describe('[MASK: MASK_NUMBERS]', () => {
  jest.useFakeTimers();
  it('should be possible to pass a value of type string | number | null and return the value with mask and unmask with locale default ptBR and decimalPlaces default to equal 0.', () => {
    let maskNumber = maskNumbers({
      value: 123.98,
    });
    expect(maskNumber).toEqual({ unmask: '12398', value: '12.398' });

    maskNumber = maskNumbers({
      value: '123.98',
    });
    expect(maskNumber).toEqual({ unmask: '12398', value: '12.398' });

    maskNumber = maskNumbers({
      value: '-123.98',
    });
    expect(maskNumber).toEqual({ unmask: '12398', value: '12.398' });

    maskNumber = maskNumbers({
      value: '-123.98',
      allowNegative: true,
    });
    expect(maskNumber).toEqual({ unmask: '-12398', value: '-12.398' });
  });
  it('should be return empty value and unmask when the user pass more then 10 decimal places and must trigger a console.log to the user.', () => {
    console.log = jest.fn();
    const consoleSpy = jest.spyOn(console, 'log');
    let maskNumber = maskNumbers({
      value: 123.98,
      decimalPlaces: 11,
    });
    expect(maskNumber).toEqual({ unmask: '', value: '' });
    expect(consoleSpy).toHaveBeenCalled();

    maskNumber = maskNumbers({
      value: 123.98,
      decimalPlaces: 10,
    });
    expect(maskNumber).toEqual({
      unmask: '0.0000012398',
      value: '0,0000012398',
    });

    consoleSpy.mockRestore();
  });
  it('A event must be passed to the maskNumbers and it must correctly call the setSelectionRange of the event.target, passing the caret positions as parameters after the input is typed.', async () => {
    const mockInputElement = new MockHTMLInputElement();
    mockInputElement.value = '123.47';
    mockInputElement.selectionStart = 7;
    const mockEvent: Partial<Event> = {
      type: 'focus',
      target: mockInputElement,
    };
    maskNumbers({
      value: 123.98,
      decimalPlaces: 10,
      event: mockEvent as Event,
    });
    jest.advanceTimersByTime(12);
    jest.runAllTimers();
    expect(mockInputElement.setSelectionRange).toHaveBeenCalledWith(6, 6);
  });
});
