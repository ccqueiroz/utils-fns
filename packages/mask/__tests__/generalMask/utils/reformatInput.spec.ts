import { defaultMasks } from '../../../src/lib/generalMask/utils/defaultMask';
import { reformatInput } from '../../../src/lib/generalMask/utils/reformatInput';
describe('[MASK: REFORMAT_INPUT]', () => {
  it('should be pass string with patterns and any character that composes a pattern especifield dont will be show when the user try writer', () => {
    const patternCpf = '999.999.999-99';
    const valueCpf = '053.179.013-';

    const maskDefinitions = defaultMasks;
    let returnReformatInput = reformatInput({
      value: valueCpf,
      pattern: patternCpf,
      maskDefinitions,
      allowEmpty: true,
    });

    expect(returnReformatInput).toEqual('053.179.013');

    const patternName = 'CaaaUT';
    const valueName = 'CoooVT';

    returnReformatInput = reformatInput({
      value: valueName,
      pattern: patternName,
      maskDefinitions,
      allowEmpty: true,
    });

    expect(returnReformatInput).toEqual('CoooV');
  });
});
