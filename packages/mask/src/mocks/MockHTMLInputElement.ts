export class MockHTMLInputElement implements Partial<HTMLInputElement> {
  value = '';
  selectionStart = 0;
  selectionEnd = 0;
  setSelectionRange = jest.fn();
  addEventListener = jest.fn();
  dispatchEvent = jest.fn();
  removeEventListener = jest.fn();
}
